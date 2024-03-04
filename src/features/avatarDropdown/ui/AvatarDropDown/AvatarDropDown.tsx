import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getRouteAdmin, getRouteProfile } from '@/shared/constants/router';
import { Dropdown } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const AvatarDropDown = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
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
        ...(isAdminPanelAvailable
          ? [
              {
                content: t('Admin panel'),
                href: getRouteAdmin(),
              },
            ]
          : []),
        {
          content: t('Profile page'),
          href: getRouteProfile(authData.id),
        },
        { content: t('Logout'), onClick: onLogout },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} fallbackInverted />}
      direction="bottomLeft"
    />
  );
};
