import { cityMappings } from './../models/LanguageMappings'
import { addLocale, useLocale } from 'ttag';

const defaultLocale = 'my'
const cacheName = 'appLocale'

export const locales = ['my', 'en']
export const localeNames = ['မြန်မာ', 'English']
export const getLocale = () => {
    const localeParam = new URLSearchParams(window.location.hash.replace(/#\/\w*\??/, ''))
        .get('locale')
    if (localeParam && locales.includes(localeParam)) {
        setLocale(localeParam)
        return localeParam
    }
    return window.localStorage.getItem(cacheName) || defaultLocale
}

export const setLocale = (locale: string) => {
  window.localStorage.setItem(cacheName, locale.toString())
}

const locale = getLocale();
const initI18N = () => {
    if (locale !== 'my') {
        const translationsObj = require(`../../i18n/${locale}.json`);
        addLocale(locale, translationsObj);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLocale(locale);
    }
}

export const getLocaleCity = (city: string | undefined) => city && locale !== 'my' ? cityMappings[city.trim()] : city

initI18N()