import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode
}

export const Card = ({ children, className, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(s.Card, {}, [className])} {...otherProps}>
      { children }
    </div>
  );
};
