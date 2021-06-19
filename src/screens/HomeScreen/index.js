import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';

import Container from '../../components/Container';
import Location from '../../components/Location';
import MenuButton from '../../components/MenuButton';

import styles from './styles';
import { images, FONTS, SIZES } from '../../constants';

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
      <View>
        <Text style={{...FONTS.h1}}>
          Online Food
        </Text>
        <View style={styles.containerTitle}>
          <Text style={{...FONTS.body1}}>
            Delivery!
          </Text>
          <Image 
            source={images.emojiTongue}
            style={styles.emojiTongue}
          />
        </View>
      </View>
    </Container>
  )
}

export default HomeScreen;