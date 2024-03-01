import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

export const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      <div>1123</div>
      <Counter />
      <p>{t('Main page')}</p>
    </Page>
  );
};
