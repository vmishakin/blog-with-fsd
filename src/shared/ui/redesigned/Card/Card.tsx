import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

export const Card = ({
  children,
  className,
  variant = 'normal',
  max,
  padding = '8',
  ...otherProps
}: CardProps) => {
  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(s.Card, { [s.max]: max }, [className, s[variant], s[paddingClass]])}
      {...otherProps}
    >
      {children}
    </div>
  );
};
