import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Counter />
      <p>{t('Main page')}</p>
    </Page>
  );
};
