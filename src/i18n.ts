import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translations
import en from './locales/en/lang.json';
import hi from './locales/hi/lang.json';
import mr from './locales/mr/lang.json';
import es from './locales/es/lang.json';
import fr from './locales/fr/lang.json';
import ar from './locales/ar/lang.json';

// Define the resource type
const resources = {
  en: { translation: en },
  hi: { translation: hi },
  mr: { translation: mr },
  es: { translation: es },
  fr: { translation: fr },
  ar: { translation: ar },
} as const;

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
