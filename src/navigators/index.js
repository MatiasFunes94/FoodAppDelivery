import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import InitialScreen from '../screens/InitialScreen';
import BottomTabs from './BottomTabNavigator';
import { AuthScreen } from '../screens/AuthScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      // AuthLoading: splashscreen, //splashscreen
      FirstEnter: InitialScreen,
      App: BottomTabs,
      Auth: AuthScreen,
    },
    {
      initialRouteName: 'FirstEnter',
    },
  ),
);
