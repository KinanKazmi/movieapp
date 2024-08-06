import type { MovieType, Video } from '../redux/apiTypes';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import SearchPage from '../views/SearchPage';
import MovieDetail from '../views/MovieDetail';
import VideoPlayer from '../views/VideoPlayer';
import GetSeat from '../views/GetSeat';

export type RootStackParamList = {
  Home: undefined;
  SearchPage: undefined;
  MovieDetail: { movie: MovieType };
  VideoPlayer: { video: Video | undefined };
  GetSeat: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export const opt = {
  options: {
    headerShown: false,
    orientation: 'portrait',
  } as NativeStackNavigationOptions,
};

export const components = {
  Home: Home,
  SearchPage: SearchPage,
  MovieDetail: MovieDetail,
  VideoPlayer: VideoPlayer,
  GetSeat: GetSeat,
};
