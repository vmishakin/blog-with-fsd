import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Loader.module.scss';

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(s.lds_ellipsis, {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
