import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import aboutNS from '../../../../public/locales/en/about.json';
import translationNS from '../../../../public/locales/en/translation.json';
import profileNS from '../../../../public/locales/en/profile.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: translationNS,
        about: aboutNS,
        profile: profileNS,
      },
    },
  });

export default i18n;
