import { useSelector } from 'react-redux';
import { memo, useState } from 'react';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { LangSwitcher } from '@/features/LangSwitcher';
import ArrowIcon from '@/shared/assets/icons/redesign/arrow-bottom.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <aside
          data-testid="sidebar"
          className={classNames(s.SidebarRedesigned, { [s.collapsedRedesigned]: collapsed }, [
            className,
          ])}
        >
          <AppLogo className={s.appLogo} size={collapsed ? 30 : 100} />
          <VStack className={s.items} gap="8" role="navigation">
            {sidebarItemsList.map((item) => {
              return <SidebarItem item={item} collapsed={collapsed} key={item.path} />;
            })}
          </VStack>
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={s.collapseBtn}
            Svg={ArrowIcon}
            clickable
          />
          <div className={s.switchersRedesigned}>
            <ThemeSwitcher />
            <LangSwitcher collapsed={collapsed} className={s.lang} />
          </div>
        </aside>
      }
      off={
        <aside
          data-testid="sidebar"
          className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
        >
          <VStack className={s.items} gap="8" role="navigation">
            {sidebarItemsList.map((item) => {
              return <SidebarItem item={item} collapsed={collapsed} key={item.path} />;
            })}
          </VStack>

          <Button
            data-testid="sidebar-toggle"
            className={s.collapseBtn}
            onClick={onToggle}
            type="button"
            theme={ButtonTheme.BACKGROUND_INVERTED}
            square
            size={ButtonSize.XL}
          >
            {collapsed ? '>' : '<'}
          </Button>
          <div className={s.switchers}>
            <ThemeSwitcher />
            <LangSwitcher collapsed={collapsed} />
          </div>
        </aside>
      }
    />
  );
});
