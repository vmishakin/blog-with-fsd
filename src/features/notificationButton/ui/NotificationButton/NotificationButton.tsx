import { BrowserView, MobileView } from 'react-device-detect';
import { useCallback, useState } from 'react';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Popover } from '@/shared/ui/redesigned/Popups';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { NotificationList } from '@/entities/Notification';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/redesign/notification.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import s from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

export const NotificationButton = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const trigger = (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />}
      off={
        <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
          <IconDeprecated Svg={NotificationIconDeprecated} inverted />
        </ButtonDeprecated>
      }
    />
  );

  return (
    <>
      <BrowserView>
        <ToggleFeatures
          name="isAppRedesigned"
          on={
            <Popover className={s.NotificationButton} direction="bottomLeft" trigger={trigger}>
              <NotificationList className={s.notifications} />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={s.NotificationButton}
              trigger={trigger}
              direction="bottomLeft"
              unmount={false}
            >
              <NotificationList className={s.notifications} />
            </PopoverDeprecated>
          }
        />
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={drawerOpen} onClose={onCloseDrawer} lazy>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
};
