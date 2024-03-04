import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

/**
 * @deprecated
 */
export const Select = <T extends string>({
  label,
  className,
  options,
  value,
  onChange,
  readonly,
}: SelectProps<T>) => {
  const optionList = useMemo(() => {
    return options?.map((opt) => (
      <option className={s.option} value={opt.value} key={opt.value}>
        {opt.content}
      </option>
    ));
  }, [options]);

  const onChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(s.Wrapper, {}, [className])}>
      {label && <span className={s.label}>{`${label}>`}</span>}
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
};
