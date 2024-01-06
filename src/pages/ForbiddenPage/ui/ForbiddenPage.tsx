import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';

export const ForbiddenPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t('Forbidden. You don`t have access.')}
    </Page>
  );
};
