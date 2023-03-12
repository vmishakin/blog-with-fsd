import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
    >
      <div className={s.items}>
        {SidebarItemsList.map((item) => {
          return (
            <SidebarItem
              item={item}
              collapsed={collapsed}
              key={item.path}
            />
          );
        })}
      </div>

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
    </div>
  );
});
