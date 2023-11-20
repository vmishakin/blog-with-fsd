import { Menu } from "@headlessui/react";
import s from "./Dropdown.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = ({
  className,
  items,
  trigger,
  direction = "bottomRight",
}: DropdownProps) => {
  return (
    <Menu as="div" className={classNames(s.Dropdown, {}, [className])}>
      <Menu.Button className={s.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(s.menu, {}, [s[direction]])}>
        {items.map((item, i) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              className={classNames(s.item, { [s.active]: active })}
              onClick={item.onClick}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={i}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled} key={i}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
