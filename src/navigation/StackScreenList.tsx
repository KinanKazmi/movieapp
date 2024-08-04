import type { UpcomingResult } from '../redux/apiTypes';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import SearchPage from '../views/SearchPage';
import MovieDetail from '../views/MovieDetail';

export type RootStackParamList = {
  Home: undefined;
  SearchPage: undefined;
  MovieDetail: { movie: UpcomingResult };
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const opt = {
  options: {
    headerShown: false,
    orientation: 'portrait',
  } as NativeStackNavigationOptions,
};

export const screens = [
  {
    name: 'Home',
    component: Home,
    options: opt,
  },
  {
    name: 'SearchPage',
    component: SearchPage,
    options: opt,
  },
  {
    name: 'MovieDetail',
    component: MovieDetail,
    options: opt,
  },
];
