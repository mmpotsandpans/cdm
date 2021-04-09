import { getStateFromCity } from './../models/adminBoundaries'
import { t } from "ttag";
import { normalizeString } from './stringUtils';
import { People, Person } from "../models/People";
import { fallenImages } from "../resources/fallen";
import { woundedImages } from "../resources/wounded";
import { getLocale, getLocaleCity, getLocaleState } from "./i18n";

export const getPersonMedia = (person: Person | undefined, peopleType: People) => {
    let media
    if (peopleType === People.detained) {
        media = person?.media
    } else {
        const images = peopleType === People.fallen ? fallenImages : woundedImages
        media = images.get(person?.folder?.trim() || person?.name.trim() || '')
    }
    return media?.filter(m => !/hidden/.test(m))
}

export const validateMediaFolders = (people: Person[], peopleType: People) => {
    const images = peopleType === People.fallen ? fallenImages : woundedImages
    const folderNames = people.map(p => p?.folder).filter(f => f)
    people.forEach((person: Person) => {
        const media = images.get(person?.folder?.trim() || person?.name.trim() || '')
        if (person?.folder && !media) {
            console.warn(`${person?.name} has invalid media folder`)
        }
    })
    const folders = Array.from(images.keys())
    folders.forEach(f => {
        if (!folderNames.includes(f)) {
            console.warn(`${f} folder is not associated with any person`)
        }
    })
}

const locale = getLocale()

export const getName = (p: Person | undefined) => {
    if (!p) {
        return undefined
    }
    const defaultName = `${p.honorific}${p.name}`
    if (locale === 'my') {
        return defaultName
    } else {
        const localeName = `${locale}Name`
        return (p as any)[localeName] ? (p.honorific ? `${p.honorific} ` : '') + (p as any)[localeName] : defaultName
    }
}

export const getDetails = (p: Person | undefined) => {
    if (!p) {
        return undefined
    }
    let details
    if (locale === 'my') {
        details = p.details
    } else {
        const localeDetails = `${locale}Details`
        details = (p as any)[localeDetails] ? (p as any)[localeDetails] : p.details
    }
    return details?.replace(/https?:\/\//g, '')
}

export const getExportCol = (p: Person, col: keyof Person) => {
    if (col === 'name') {
        return getName(p)
    } else if (col === 'details') {
        return getDetails(p)
    } else if (col === 'date' && p[col]) {
        return (new Date(parseInt(p[col] || ''))).toLocaleDateString()
    } else {
        return p[col] || '-'
    }
}

export const normalizePeopleData = (data: Person[]) => data.map(p => {
    let date = undefined
    if (p.date) {
        const [day, month, year] = p.date.split('/').map(i => parseInt(i))
        date = (new Date(year, month - 1, day)).getTime().toString()
    }
    const normalizedCity = normalizeString(p.city || '')
    return {
        ...p,
        name: normalizeString(p.name),
        confirmed: p.confirmed?.toString().toLowerCase() === 'true',
        date,
        age: p.age ? parseInt(p.age.toString()) : undefined,
        details: getDetails(p),
        city: getLocaleCity(normalizedCity),
        honorific: getHonorific(p),
        state: getLocaleState(getStateFromCity(normalizedCity))
    }
}).filter(p => p.name)

export const getHonorific = (p: Person) => {
    if (locale === 'my' && p.honorific) {
        return p.honorific
    }
    if (!p.gender) {
        return ''
    }
    const gender = p.gender.trim()
    if (p.age) {
        if (p.age >= 40) {
            return gender === 'm' ? t`ဦး` : t`ဒေါ်`
        } else if (p.age >= 20) {
            return gender === 'm' ? t`ကို` : t`မ`
        } else {
            return gender === 'm' ? t`မောင်` : t`မ`
        }
    } else {
        return gender === 'm' ? t`ကို` : t`မ` 
    }
}

// TODO: refactor
export const getTotals = (people: Person[])  => {
    const totals: any = {
        date: {},
        city: {},
        state: {},
        township: {},
    }
    people.forEach((person: Person) => {
        if (person.date) {
            totals.date[person.date] = (totals.date[person.date] || 0) + 1
        }
        if (person.city) {
            totals.city[person.city] = (totals.city[person.city] || 0) + 1
        }
        if (person.state) {
            totals.state[person.state] = (totals.state[person.state] || 0) + 1
        }
        if (person.township) {
            totals.township[person.township] = (totals.township[person.township] || 0) + 1
        }
        hasMissingField(person);
    })
    console.warn(peopleWithMissingFields)
    return totals
}

const peopleWithMissingFields = {
    unconfirmed: new Set(),
    noAge: new Set(),
    noDate: new Set(),
    noCity: new Set(),
    noFolder: new Set()
}
export const hasMissingField = (person: Person) => {
    if (!person.date) {
        peopleWithMissingFields.noDate.add(person.name + '-' + person.date)
    }
    if (!person.age) {
        peopleWithMissingFields.noAge.add(person.name + '-' + person.date)
    }
    if (!person.confirmed) {
        peopleWithMissingFields.unconfirmed.add(person.name + '-' + person.date)
    }
    if (!person.city) {
        peopleWithMissingFields.noCity.add(person.name + '-' + person.date)
    }
    if (!person.folder) {
        peopleWithMissingFields.noFolder.add(person.name + '-' + person.date)
    }
}