import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

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
    <aside
      data-testid="sidebar"
      className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
    >
      <VStack className={s.items} gap="8" role="navigation">
        {sidebarItemsList.map((item) => {
          return (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          );
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
  );
});
