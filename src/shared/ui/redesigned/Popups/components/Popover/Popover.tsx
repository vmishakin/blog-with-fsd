import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import s from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
  unmount?: boolean;
}

export const Popover = ({
  className,
  direction = 'bottomRight',
  trigger,
  children,
  unmount = true,
}: PopoverProps) => {
  return (
    <HPopover className={classNames(s.Popover, {}, [popupCls.popup, className])}>
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(s.panel, {}, [popupCls[direction]])} unmount={unmount}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
