import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeNavigator from './HomeNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: splashscreen, //splashscreen
      App: HomeNavigator, //homenavigator
      // Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
