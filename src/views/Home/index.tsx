import React from 'react';
import theme from '../../theme';
import {
  Tab,
  tabScreens,
  TabStackParamList,
} from '../../navigation/TabScreenList';
import { tabBarLabelStyle, tabBarStyle, IconImage } from '../../sharedStyles';

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tabBarStyle,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.darkGray,
        tabBarLabelStyle: tabBarLabelStyle,
      }}
    >
      {tabScreens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name as keyof TabStackParamList}
          component={screen.component}
          options={{
            tabBarLabel: screen.name,
            tabBarIcon: ({ focused }) => (
              <IconImage
                source={screen.icon}
                resizeMode="contain"
                tintColor={focused ? theme.colors.white : theme.colors.darkGray}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Home;
