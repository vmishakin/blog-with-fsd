import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  memo,
  ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
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
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button = memo(
  forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      variant = 'outline',
      square,
      disabled,
      fullWidth,
      size = 'm',
      addonLeft,
      addonRight,
      ...otherProps
    } = props;

    const mods: Mods = {
      [s.square]: square,
      [s.disabled]: disabled,
      [s.fullWidth]: fullWidth,
      [s.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
      <button
        {...otherProps}
        className={classNames(s.Button, mods, [s[variant], s[size], className])}
        disabled={disabled}
        type="button"
        ref={ref}
      >
        <div className={s.addonLeft}>{addonLeft}</div>
        {children}
        <div className={s.addonRight}>{addonRight}</div>
      </button>
    );
  }),
);
