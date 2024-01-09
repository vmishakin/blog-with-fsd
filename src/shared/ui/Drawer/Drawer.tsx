import { ReactNode, memo } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import s from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = memo(({
  className, children, isOpen, onClose, lazy,
}: DrawerProps) => {
  const { theme } = useTheme();
  const { close, isClosing, isMounted } = useModal({ isOpen, onClose });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(
        s.Drawer,
        { [s.opened]: isOpen, [s.isClosing]: isClosing },
        [className, theme, 'app_drawer'],
      )}
      >
        <Overlay onClick={close} closing={isClosing} />
        <div className={s.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
});
