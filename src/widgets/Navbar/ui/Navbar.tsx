import {
  getUserAuthData,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropDown } from 'features/avatarDropdown';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation(['translation', 'about']);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(s.navbar, {}, [className])}>
        <Text
          className={classNames(s.appName)}
          title={t('Pena blog')}
          theme={TextTheme.INVERTED}
        />
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
          {t('Create new article')}
        </AppLink>
        <HStack gap="16" className={s.actions}>
          <NotificationButton />
          <AvatarDropDown />
        </HStack>
        {/* <Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={onLogout}>
          {t('Logout')}
        </Button> */}
      </header>
    );
  }

  return (
    <header className={classNames(s.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={s.links}
        onClick={onOpenAuthModal}
      >
        {t('Login')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
      )}
    </header>
  );
});
