import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { opt, components, Stack } from './StackScreenList';
import theme from '../theme';

export default function NavigationScreens() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          isDarkMode ? theme.colors.darkBackground : theme.colors.background
        }
      />
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={components.Home} {...opt} />
        <Stack.Screen
          name={'SearchPage'}
          component={components.SearchPage}
          {...opt}
        />
        <Stack.Screen
          name={'MovieDetail'}
          component={components.MovieDetail}
          {...opt}
        />
        <Stack.Screen
          name={'VideoPlayer'}
          component={components.VideoPlayer}
          {...opt}
        />
      </Stack.Navigator>
    </>
  );
}
