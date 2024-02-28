import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
  collapsed: boolean;
}

export const LangSwitcher = memo(({ collapsed }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ButtonTheme.CLEAR} onClick={toggle}>
      {collapsed ? t('Language short') : t('Language')}
    </Button>
  );
});
