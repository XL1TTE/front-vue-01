import { createI18n } from 'vue-i18n'

//#region Locales

import en from './yamls/en.yaml'
import ru from './yamls/ru.yaml'

//#endregion

const DEFAULT_LOCALE = 'en';

const locales = {
    en: en,
    ru: ru
}

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: 'ru',
  messages: locales,
})

export default i18n
