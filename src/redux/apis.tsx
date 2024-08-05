import type { MovieVideo, UpcomingMovies } from './apiTypes';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, BASE_URL, UPCOMING } from '../constEnv';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchUpcoming: builder.query<UpcomingMovies, void>({
      query: () => ({
        url: UPCOMING,
        params: { api_key: API_KEY },
        method: 'GET',
      }),
    }),
    fetchMovieVideo: builder.query<MovieVideo, { movie_id: string }>({
      query: ({ movie_id }) => ({
        url: `${movie_id}/videos`,
        params: { api_key: API_KEY },
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchUpcomingQuery, useFetchMovieVideoQuery } = api;
