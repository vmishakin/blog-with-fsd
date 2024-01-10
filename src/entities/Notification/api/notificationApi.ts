import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '@/entities/Notification/model/types/notification';

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], void>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationsApi;
