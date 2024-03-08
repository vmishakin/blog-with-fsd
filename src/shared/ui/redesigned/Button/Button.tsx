import { ButtonHTMLAttributes, ForwardedRef, forwardRef, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo(
  forwardRef(
    (
      {
        className,
        children,
        variant = 'outline',
        square,
        size = 'm',
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
            [s[variant], s[size], className],
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
