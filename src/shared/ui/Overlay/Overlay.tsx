import { classNames } from 'shared/lib/classNames/classNames';
import s from './Overlay.module.scss';

interface OverlayProps {
  className?: string
  onClick?: () => void
  closing?: boolean
}

export const Overlay = ({ className, onClick, closing }: OverlayProps) => {
  return (
    <div onClick={onClick} className={classNames(s.Overlay, { [s.closing]: closing }, [className])} />
  );
};
