import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { getRouteArticleCreate } from '@/shared/constants/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropDown } from '@/features/avatarDropdown';
import s from './Navbar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

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
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <header className={classNames(s.NavbarRedesigned, {}, [className])}>
            <HStack gap="16" className={s.actions}>
              <NotificationButton />
              <AvatarDropDown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(s.navbar, {}, [className])}>
            <Text
              className={classNames(s.appName)}
              title={t('FSD blog')}
              theme={TextTheme.INVERTED}
            />
            <AppLink theme={AppLinkTheme.SECONDARY} to={getRouteArticleCreate()}>
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
        }
      />
    );
  }

  return (
    <header className={classNames(s.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={onOpenAuthModal}>
        {t('Login')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />}
    </header>
  );
});
