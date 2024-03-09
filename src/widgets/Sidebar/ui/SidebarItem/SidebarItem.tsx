import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import s from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <AppLink
          to={item.path}
          className={classNames(s.itemRedesigned, {
            [s.collapsedRedesigned]: collapsed,
          })}
          activeClassName={s.active}
        >
          <Icon Svg={item.Icon} />
          <span className={s.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme={AppLinkTheme.SECONDARY}
          to={item.path}
          className={classNames(s.item, {
            [s.collapsed]: collapsed,
          })}
        >
          <item.Icon className={s.icon} />
          <span className={s.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});
