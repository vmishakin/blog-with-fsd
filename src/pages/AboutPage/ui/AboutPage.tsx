import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page data-testid="AboutPage">
      <p>{t('About page')}</p>
    </Page>
  );
};
