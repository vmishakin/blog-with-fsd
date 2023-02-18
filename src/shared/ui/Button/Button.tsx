import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={classNames(s.Button, {}, [className, s[theme]])}
      type="button"
    >
      {children}
    </button>
  );
};
