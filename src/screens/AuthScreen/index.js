import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

import Container from '../../components/Container';

import styles from './styles';

import {
  images,
  FONTS,
} from '../../constants';
import TabsAuth from '../../navigators/AuthNavigator';

export const AuthScreen = () => (
  <Container customStyle={styles.lightBackground}>
    <View style={styles.containerImage}>
      <Image source={images.foodMaterial} style={styles.imageFoodMaterial} />
    </View>
    <Text style={[FONTS.largeTitle, styles.title]}>Mat Food</Text>
    <Text style={[FONTS.body2, styles.subTitle]}>Delivery App</Text>
    <TabsAuth />
  </Container>
);

export const LoginScreen = () => (
  <Container customStyle={styles.lightBackground}>
    <View style={styles.containerAuth}>
      <Text>Email Address</Text>
      <Text>Password</Text>
    </View>
  </Container>
)

export const RegisterScreen = () => (
  <Container customStyle={styles.lightBackground}>
    <View style={styles.containerAuth}>
      <Text>Name</Text>
      <Text>Email Address</Text>
      <Text>Password</Text>
    </View>
  </Container>
)