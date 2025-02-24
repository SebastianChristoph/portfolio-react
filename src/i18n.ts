// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import deTranslation from './locales/de/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: deTranslation },
      en: { translation: enTranslation },
    },
    lng: 'de', // Standard-Sprache ist Deutsch
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
