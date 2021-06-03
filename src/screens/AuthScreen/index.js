import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import Input from '../../components/Input';
import TabsAuth from '../../navigators/AuthNavigator';

import styles from './styles';

import {
  images,
  FONTS,
  SIZES
} from '../../constants';
import Button from '../../components/Button';

export const AuthScreen = () => (
  <View style={styles.lightBackground}>
    <ScrollView>
      <KeyboardAvoidingView>
        <View style={styles.containerImage}>
          <Image
            source={images.foodMaterial}
            style={styles.imageFoodMaterial}
          />
        </View>
        <Text style={[FONTS.largeTitle, styles.title]}>Mat Food</Text>
        <Text style={[FONTS.body2, styles.subTitle]}>Delivery App</Text>
        <TabsAuth />
      </KeyboardAvoidingView>
    </ScrollView>
  </View>
);

export const LoginScreen = () => {
  const [inputEmailLogin, setInputEmailLogin] = useState('');
  const [inputPasswordLogin, setInputPasswordLogin] = useState('');
  return (
    <View style={styles.containerAuth}>
      <View>
      <Input
        title={'Email address'}
        placeholder={'Insert your email'}
        value={inputEmailLogin}
        onChangeText={setInputEmailLogin}
      />
      <Input
        title={'Password'}
        placeholder={'Insert your password'}
        value={inputPasswordLogin}
        onChangeText={setInputPasswordLogin}
      />
      </View>
      <Button 
        children={'Login'}
        customStyle={styles.buttonLoginRegister}
      />
    </View>
  );
}

export const RegisterScreen = () => {
  const [inputNameRegister, setInputNameRegister] = useState('');
  const [inputEmailRegister, setInputEmailRegister] = useState('');
  const [inputPasswordRegister, setInputPasswordRegister] = useState('');
  return (
    <View style={styles.lightBackground}>
      {/* <KeyboardAvoidingView>
        <ScrollView> */}
      <View style={styles.containerAuth}>
        <View>
          <Input
            title={'Name'}
            placeholder={'Insert your name'}
            value={inputNameRegister}
            onChangeText={setInputNameRegister}
          />
          <Input
            title={'Email address'}
            placeholder={'Insert your email'}
            value={inputEmailRegister}
            onChangeText={setInputEmailRegister}
          />
          <Input
            title={'Password'}
            placeholder={'Insert your password'}
            value={inputPasswordRegister}
            onChangeText={setInputPasswordRegister}
          />
        </View>
        <Button
          children={'Login'}
          customStyle={styles.buttonLoginRegister}
        />
      </View>
      {/* </ScrollView>
      </KeyboardAvoidingView> */}
    </View>
  );
};