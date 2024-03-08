import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import s from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import popupCls from '../../styles/popup.module.scss';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = <T extends string>({
  items,
  className,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottomRight',
  label,
}: ListBoxProps<T>) => {
  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        as="div"
        className={classNames(s.ListBox, {}, [popupCls.popup, className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={s.trigger}>
          <Button variant="filled" disabled={readonly}>
            {selectedItem?.content ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(s.options, {}, [popupCls[direction]])}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(s.item, {
                    [s.active]: active,
                    [s.disabled]: item.disabled,
                    [s.selected]: selected,
                  })}
                >
                  {selected && '>'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
