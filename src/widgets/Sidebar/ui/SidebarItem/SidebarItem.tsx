import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import s from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <div className={classNames(s.SidebarItem, { [s.collapsed]: collapsed })}>
      <AppLink className={s.link} theme={AppLinkTheme.PRIMARY} to={item.path}>
        <item.Icon className={s.icon} />
        <div className={s.link_label}>{t(item.text)}</div>
      </AppLink>
    </div>
  );
});
