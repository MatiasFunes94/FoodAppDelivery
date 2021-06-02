import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import InitialScreen from '../screens/InitialScreen';
import HomeNavigator from './HomeNavigator';
import { AuthScreen } from '../screens/AuthScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: splashscreen, //splashscreen
      FirstEnter: InitialScreen,
      App: HomeNavigator, //homenavigator
      Auth: AuthScreen,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
