import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen, RegisterScreen } from '../screens/AuthScreen';
import { StyleSheet } from 'react-native';

import { COLORS, SIZES } from '../constants';

const TopTabsAuth = createMaterialTopTabNavigator();

const TabsAuth = () => {
  return (
    <NavigationContainer independent={true}>
      <TopTabsAuth.Navigator tabBarOptions={{
        style: { ...styles.container },
        labelStyle: { ...styles.labelStyle },
        indicatorStyle: { ...styles.indicator }

      }} style={{ marginHorizontal: 20 }}>
        <TopTabsAuth.Screen name='Login' component={LoginScreen} />
        <TopTabsAuth.Screen name='Register' component={RegisterScreen} />
      </TopTabsAuth.Navigator>
    </NavigationContainer>
  );
}

export default TabsAuth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light2,
    width: SIZES.width * 0.8,
    alignSelf: 'center',
    elevation: 0,
    paddingBottom: 5,
  },
  labelStyle: {
    fontSize: 14,
    width: 80,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  indicator: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
    width: 150,
    alignSelf: 'center',
  },
});