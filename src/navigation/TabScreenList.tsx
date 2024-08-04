import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import More from '../views/More';
import Dashboard from '../views/Dashboard';
import Watch from '../views/Watch';
import MediaLibrary from '../views/MediaLibrary';
import DashboardIcon from '../assets/icons/DasboardIcon.png';
import LibraryIcon from '../assets/icons/LibraryIcon.png';
import MoreIcon from '../assets/icons/MoreIcon.png';
import WatchIcon from '../assets/icons/WatchIcon.png';

export const Tab = createBottomTabNavigator<TabStackParamList>();

export type TabStackParamList = {
  Dashobard: undefined;
  Watch: undefined;
  MediaLibrary: undefined;
  More: undefined;
};

export const tabScreens = [
  {
    name: 'Dashboard',
    component: Dashboard,
    icon: DashboardIcon,
  },
  {
    name: 'Watch',
    component: Watch,
    icon: WatchIcon,
  },
  {
    name: 'Media Library',
    component: MediaLibrary,
    icon: LibraryIcon,
  },
  {
    name: 'More',
    component: More,
    icon: MoreIcon,
  },
];
