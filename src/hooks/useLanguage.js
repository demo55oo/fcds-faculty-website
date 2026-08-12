import { useTranslation } from 'react-i18next';

export default function useLanguage() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en';
  const isRtl = lang === 'ar';

  const toggleLanguage = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(next);
  };

  const localize = (value) => {
    if (value == null) return '';
    if (typeof value === 'string') return value;
    return value[lang] ?? value.en ?? '';
  };

  return { t, i18n, lang, isRtl, toggleLanguage, localize };
}
