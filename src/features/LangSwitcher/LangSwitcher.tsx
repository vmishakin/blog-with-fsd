import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Button as ButtonDeprecated, ButtonTheme } from '../../shared/ui/deprecated/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps {
  collapsed: boolean;
  className?: string;
}

export const LangSwitcher = memo(({ collapsed, className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <Button variant="clear" onClick={toggle} className={classNames('', {}, [className])}>
          {collapsed ? t('Language short') : t('Language')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggle}
        >
          {collapsed ? t('Language short') : t('Language')}
        </ButtonDeprecated>
      }
    />
  );
});
