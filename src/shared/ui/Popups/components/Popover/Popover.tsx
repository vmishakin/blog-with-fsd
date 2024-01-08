import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string
  direction?: DropdownDirection
  trigger: ReactNode
  children: ReactNode
}

export const Popover = ({
  className, direction = 'bottomRight', trigger, children,
}: PopoverProps) => {
  return (
    <HPopover className={classNames(s.Popover, {}, [popupCls.popup, className])}>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(s.panel, {}, [popupCls[direction]])}>{children}</HPopover.Panel>
    </HPopover>
  );
};
