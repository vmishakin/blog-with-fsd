import { Card, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { Notification } from '../../model/types/notification';
import s from './NotificationItem.module.scss';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem = ({ notification }: NotificationItemProps) => {
  const content = (
    <Card theme={CardTheme.OUTLINED} className={s.NotificationItem}>
      <Text title={notification.title} text={notification.description} />
    </Card>
  );

  if (notification.href) {
    return (
      <a className={s.link} target="_blank" rel="noreferrer" href={notification.href}>
        {content}
      </a>
    );
  }

  return content;
};
