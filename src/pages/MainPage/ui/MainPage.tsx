import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <p>{t('Main page')}</p>
    </Page>
  );
};
