import {
  ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean;
}

export const Input = memo(({
  className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: SyntheticEvent) => {
    setCaretPosition((e.target as unknown as {selectionStart: number}).selectionStart || 0);
  };

  return (
    <div className={classNames(s.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={s.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={s.caretWrapper}>
        <input
          className={s.input}
          ref={ref}
          {...otherProps}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
        />
        {isFocused && (
          <span className={s.caret} style={{ left: `${caretPosition * 11}px` }} />
        )}
      </div>
    </div>
  );
});
