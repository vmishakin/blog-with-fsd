import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED= 'clear_inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = memo(({
  className,
  children,
  theme = ButtonTheme.OUTLINE,
  square,
  size = ButtonSize.M,
  disabled,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={classNames(s.Button, {
        [s.square]: square,
        [s.disabled]: disabled,
      }, [className, s[theme], s[size]])}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
});
