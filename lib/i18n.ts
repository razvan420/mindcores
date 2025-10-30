import en from '@/locales/en.json'
import de from '@/locales/de.json'
import ro from '@/locales/ro.json'

export type Locale = 'en' | 'de' | 'ro'

const translations = {
  en,
  de,
  ro,
}

export function getTranslations(locale: Locale = 'en') {
  return translations[locale] || translations.en
}

export const locales = ['en', 'de', 'ro'] as const satisfies readonly Locale[]

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  ro: 'Română',
}

export const defaultLocale: Locale = 'en'