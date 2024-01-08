import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { NotificationList } from 'entities/Notification';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import s from './NotificationButton.module.scss';

export const NotificationButton = () => {
  return (
    <Popover
      className={s.NotificationButton}
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} stroke inverted />
        </Button>
      )}
      direction="bottomLeft"
    >
      <NotificationList className={s.notifications} />
    </Popover>
  );
};
