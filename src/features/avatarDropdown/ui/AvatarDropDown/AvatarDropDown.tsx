import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Popups/components/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import s from './AvatarDropDown.module.scss';

export const AvatarDropDown = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const isManager = useSelector(isUserAdmin);
  const isAdmin = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Admin panel'),
          href: `${RoutePath.admin_panel}`,
        }] : []),
        {
          content: t('Profile page'),
          href: `${RoutePath.profile}/${authData.id}`,
        },
        { content: t('Logout'), onClick: onLogout },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
      className={s.dropdown}
      direction="bottomLeft"
    />
  );
};
