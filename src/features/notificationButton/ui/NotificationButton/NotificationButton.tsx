import { BrowserView, MobileView } from 'react-device-detect';
import { useState } from 'react';
import { Popover } from '@/shared/ui/Popups';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { NotificationList } from '@/entities/Notification';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import s from './NotificationButton.module.scss';

export const NotificationButton = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={() => setDrawerOpen(true)}>
      <Icon Svg={NotificationIcon} stroke inverted />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover
          className={s.NotificationButton}
          trigger={trigger}
          direction="bottomLeft"
          unmount={false}
        >
          <NotificationList className={s.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} lazy>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
};
