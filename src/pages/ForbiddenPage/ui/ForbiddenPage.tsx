import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

export const ForbiddenPage = () => {
  const { t } = useTranslation();
  return <Page data-testid="ForbiddenPage">{t('Forbidden')}</Page>;
};
