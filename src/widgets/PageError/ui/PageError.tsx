import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import s from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={s.PageError}>
      <p>{t('Page error')}</p>
      <Button onClick={reloadPage}>
        {t('Reload page')}
      </Button>
    </div>
  );
};
