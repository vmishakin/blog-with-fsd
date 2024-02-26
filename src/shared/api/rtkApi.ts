import 'isomorphic-fetch';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOCALSTORAGE_KEY } from '@/shared/constants/localstorage';

export const rtkApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
