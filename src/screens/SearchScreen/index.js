import React from 'react';
import { View, Image, Text } from 'react-native';

import Container from '../../components/Container';
import BackButton from '../../components/BackButton';

import { images, FONTS } from '../../constants';
import styles from './styles';

const SearchScreen = () => {
  return (
    <Container customStyle={styles.container}>
      <View style={styles.containerHeader}>
        <BackButton />
        <Text style={{...FONTS.h2}}>Search Food</Text>
        <Image source={images.user} style={styles.userImage} />
      </View>
    </Container>
  )
}

export default SearchScreen;
