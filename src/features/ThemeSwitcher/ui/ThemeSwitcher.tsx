import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/redesign/theme.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const toggleThemeHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      console.log(newTheme);
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<Icon Svg={ThemeIcon} clickable onClick={toggleThemeHandler} />}
      off={
        <Button
          theme={ButtonTheme.CLEAR}
          className={classNames('', {}, [className])}
          onClick={toggleThemeHandler}
        >
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width={40}
            height={40}
            inverted
          />
        </Button>
      }
    />
  );
});
