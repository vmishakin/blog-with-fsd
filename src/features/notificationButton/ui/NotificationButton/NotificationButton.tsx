import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NotificationList } from 'entities/Notification';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useState } from 'react';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider/AnimationProvider';
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
        <AnimationProvider>
          <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} lazy>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </>
  );
};
