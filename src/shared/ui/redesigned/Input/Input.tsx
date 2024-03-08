import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import s from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  label?: string;
  size?: InputSize;
}

export const Input = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    label,
    size = 'm',
    ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const mods: Mods = {
      [s.readonly]: readonly,
      [s.focused]: isFocused,
      [s.withAddonLeft]: Boolean(addonLeft),
      [s.withAddonRight]: Boolean(addonRight),
    };

    const input = (
      <div className={classNames(s.InputWrapper, mods, [className, s[size]])}>
        <div className={s.addonLeft}>{addonLeft}</div>
        <input
          className={classNames(s.input, { [s.readonly]: readonly })}
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          readOnly={readonly}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          {...otherProps}
        />
        <div className={s.addonRight}>{addonRight}</div>
      </div>
    );

    if (label) {
      return (
        <HStack max gap="8">
          <Text text={label} />
          {input}
        </HStack>
      );
    }

    return input;
  },
);
