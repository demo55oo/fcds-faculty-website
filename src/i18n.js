import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ar from './locales/ar/translation.json';

const savedLang = localStorage.getItem('app_lang');
const initialLang = savedLang === 'ar' || savedLang === 'en' ? savedLang : 'en';

function applyDocumentDirection(lang) {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  document.body.dir = dir;
}

applyDocumentDirection(initialLang);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lang) => {
  localStorage.setItem('app_lang', lang);
  applyDocumentDirection(lang);
});

export default i18n;
