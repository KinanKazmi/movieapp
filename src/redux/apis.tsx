import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Upcoming } from './apiTypes';
import { API_KEY, APP_TOKEN, BASE_URL, UPCOMING } from '../constEnv';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('api_key', APP_TOKEN);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUpcoming: builder.query<Upcoming, void>({
      query: () => ({
        url: UPCOMING,
        params: { api_key: API_KEY },
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchUpcomingQuery } = api;
