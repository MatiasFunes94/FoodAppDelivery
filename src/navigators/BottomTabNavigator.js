import React, { useRef } from 'react';
import {
  StyleSheet, 
  TouchableOpacity,
  View, 
  Animated,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

import HomeNavigator from './HomeNavigator';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import {COLORS} from '../constants';
import EmptyScreen from '../utils/EmptyScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {...styles.containerNavigator}
        }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="home-outline"
                size={25}
                color={focused ? COLORS.primary : COLORS.light}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            }
          })}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Icon
                  name="search-outline"
                  size={25}
                  color={focused ? COLORS.primary : COLORS.light}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            }
          })}
        />
        <Tab.Screen
          name="EmptyScreen"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TouchableOpacity activeOpacity={0.8}>
                <View style={styles.containerFloatButton}>
                  <IconFeather name="shopping-bag" size={25} />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Icon
                  name="notifications-outline"
                  size={25}
                  color={focused ? COLORS.primary : COLORS.light}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            }
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Icon
                  name="person-outline"
                  size={25}
                  color={focused ? COLORS.primary : COLORS.light}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            }
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{...styles.lineTab, transform: [{ translateX: tabOffsetValue }]}}
      >
      </Animated.View>
    </NavigationContainer>
  );
};

const getWidth = () => {
  let width = Dimensions.get('window').width;
  width = width - 100;
  return width / 5;
}

export default BottomTabs;

const styles = StyleSheet.create({
  containerNavigator: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 15,
    marginHorizontal: 30,
    height: 60,
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 20,
  },
  containerFloatButton: {
    width: 65,
    height: 65,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderColor: COLORS.light2,
    borderWidth: 6,
  },
  lineTab: {
    width: getWidth() - 20,
    height: 2.5,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    bottom: 72,
    left: 60,
    borderRadius: 50,
  },
});
