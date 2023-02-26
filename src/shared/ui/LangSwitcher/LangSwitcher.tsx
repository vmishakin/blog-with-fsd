import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggle}>{t('Language short')}</Button>
  );
};
