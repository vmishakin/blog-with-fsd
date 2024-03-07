import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getRouteAdmin, getRouteProfile } from '@/shared/constants/router';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';

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

  const items = [
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
  ];

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={
        <Dropdown
          items={items}
          trigger={<Avatar size={40} src={authData.avatar} />}
          direction="bottomLeft"
        />
      }
      off={
        <DropdownDeprecated
          items={items}
          trigger={<AvatarDeprecated size={30} src={authData.avatar} fallbackInverted />}
          direction="bottomLeft"
        />
      }
    />
  );
};
