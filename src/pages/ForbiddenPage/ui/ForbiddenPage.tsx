import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

export const ForbiddenPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('Forbidden. You don`t have access.')}
    </Page>
  );
};
