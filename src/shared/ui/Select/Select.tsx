import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string
  label?: string;
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo(({
  label, className, options, value, onChange, readonly
}: SelectProps) => {
  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option
        className={s.option}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(s.Wrapper, {}, [className])}>
      {label && (
        <span className={s.label}>{`${label}>`}</span>
      )}
      <select
        className={s.select}
        value={value}
        disabled={readonly}
        onChange={onChangeEventHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
