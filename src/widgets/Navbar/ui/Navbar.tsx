import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import s from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(['translation', 'about']);
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onOpenAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={s.links} onClick={onOpenAuthModal}>
        {t('Login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
    </div>
  );
};
