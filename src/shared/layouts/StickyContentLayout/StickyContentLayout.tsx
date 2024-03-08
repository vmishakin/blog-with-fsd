import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout = ({
  className,
  content,
  left,
  right,
}: StickyContentLayoutProps) => {
  return (
    <div className={classNames(s.StickyContentLayout, {}, [className])}>
      {right && <div className={s.left}>{left}</div>}
      <div className={s.content}>{content}</div>
      {left && <div className={s.right}>{right}</div>}
    </div>
  );
};
