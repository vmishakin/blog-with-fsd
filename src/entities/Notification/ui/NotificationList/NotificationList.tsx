import { useGetNotificationsQuery } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import s from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
  className?: string
}

export const NotificationList = ({ className }: NotificationListProps) => {
  const { data: notifications, isLoading } = useGetNotificationsQuery(undefined, {
    pollingInterval: 120000,
  });

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames(s.NotificationList, {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack gap="16" max className={classNames(s.NotificationList, {}, [className])}>
      {notifications?.map((notification) => (<NotificationItem key={notification.id} notification={notification} />))}
    </VStack>
  );
};
