import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Container from '../../components/Container';
import Location from '../../components/Location';
import MenuButton from '../../components/MenuButton';

import styles from './styles';
import { images } from '../../constants';

export const HomeScreen = () => {
  return (
    <Container customStyle={styles.container}>
      <View style={styles.containerHeader}>
        <MenuButton />
        <Location />
        <Image 
          source={images.user}
          style={styles.userImage} 
        />
      </View>
    </Container>
  )
}

export default HomeScreen;