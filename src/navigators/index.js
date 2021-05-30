import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import InitialScreen from '../screens/InitialScreen';
import HomeNavigator from './HomeNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: splashscreen, //splashscreen
      FirstEnter: InitialScreen,
      App: HomeNavigator, //homenavigator
      // Auth: AuthStack,
    },
    {
      initialRouteName: 'FirstEnter',
    },
  ),
);
