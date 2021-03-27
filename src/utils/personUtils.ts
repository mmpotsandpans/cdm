import { t } from "ttag";
import { normalizeString } from './stringUtils';
import { People, Person } from "../models/People";
import { fallenImages } from "../resources/fallen";
import { woundedImages } from "../resources/wounded";
import { getLocale, getLocaleCity } from "./i18n";

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
    return {
        ...p,
        name: normalizeString(p.name),
        confirmed: p.confirmed?.toString().toLowerCase() === 'true',
        date,
        age: p.age ? parseInt(p.age.toString()) : undefined,
        details: getDetails(p),
        city: getLocaleCity(normalizeString(p.city || '')),
        honorific: getHonorific(p)
    }
})

export const getHonorific = (p: Person) => {
    if (locale === 'my' && p.honorific) {
        return p.honorific
    }
    if (!p.age || !p.gender) {
        return ''
    }
    const gender = p.gender.trim()
    if (p.age >= 40) {
        return gender === 'm' ? t`ဦး` : t`ဒေါ်`
    } else if (p.age >= 20) {
        return gender === 'm' ? t`ကို` : t`မ`
    } else {
        return gender === 'm' ? t`မောင်` : t`မ`
    }
}