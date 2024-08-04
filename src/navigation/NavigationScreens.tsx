import type { RootStackParamList } from './StackScreenList';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { screens, Stack } from './StackScreenList';
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
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name as keyof RootStackParamList}
            component={screen.component}
            {...screen.options}
          />
        ))}
      </Stack.Navigator>
    </>
  );
}
