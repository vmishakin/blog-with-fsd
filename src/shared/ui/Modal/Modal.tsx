import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import s from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const { close, isClosing, isMounted } = useModal({ isOpen, onClose });
  const { theme } = useTheme();

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(s.Modal, { [s.opened]: isOpen, [s.isClosing]: isClosing }, [
          className,
          theme,
          'app_modal',
        ])}
      >
        <Overlay onClick={close} closing={isClosing} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};
