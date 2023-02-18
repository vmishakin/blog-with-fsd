import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <p>{t('About page')}</p>
    </div>
  );
};
