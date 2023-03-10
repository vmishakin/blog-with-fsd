import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(s.SidebarItem, { [s.collapsed]: collapsed })}>
      <AppLink className={s.link} theme={AppLinkTheme.PRIMARY} to={item.path}>
        <item.Icon className={s.icon} />
        <div className={s.link_label}>{t(item.text)}</div>
      </AppLink>
    </div>
  );
});
