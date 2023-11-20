import { Fragment, ReactNode, useState } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import s from "./ListBox.module.scss";
import { Mods, classNames } from "shared/lib/classNames/classNames";
import { Button } from "../Button/Button";
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

type DropdownDirection = "top" | "bottom";

export const ListBox = ({
  items,
  className,
  value,
  defaultValue,
  onChange,
  readonly,
  direction = "bottom",
  label,
}: ListBoxProps) => {
  return (
    <HStack gap="4">
      {label && <span>{label + ">"}</span>}
      <HListBox
        as="div"
        className={classNames(s.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button as={Button}>{value ?? defaultValue}</HListBox.Button>
        <HListBox.Options className={classNames(s.options, {}, [s[direction]])}>
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
                  })}
                >
                  {selected && ">"}
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
