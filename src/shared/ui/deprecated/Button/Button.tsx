import { ButtonHTMLAttributes, ForwardedRef, forwardRef, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear_inverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
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
  fullWidth?: boolean;
}

/**
 * @deprecated
 */
export const Button = memo(
  forwardRef(
    (
      {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
      }: ButtonProps,
      ref: ForwardedRef<HTMLButtonElement>,
    ) => {
      return (
        <button
          {...otherProps}
          className={classNames(
            s.Button,
            {
              [s.square]: square,
              [s.disabled]: disabled,
              [s.fullWidth]: fullWidth,
            },
            [s[theme], s[size], className],
          )}
          disabled={disabled}
          type="button"
          ref={ref}
        >
          {children}
        </button>
      );
    },
  ),
);
