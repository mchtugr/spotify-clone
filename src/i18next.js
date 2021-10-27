import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enLang from './languages/en.json'
import trLang from './languages/tr.json'

const resources = {
  US: {
    translation: enLang,
  },
  TR: {
    translation: trLang,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'TR',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
