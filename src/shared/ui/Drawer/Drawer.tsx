import { ReactNode, memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo(({
  className, children, isOpen, onClose,
}: DrawerProps) => {
  const { theme } = useTheme();

  return (
    <Portal>
      <div className={classNames(s.Drawer, { [s.opened]: isOpen }, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={s.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
