import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Container from '../../components/Container';
import BackButton from '../../components/BackButton';

import { images, FONTS, COLORS } from '../../constants';
import styles from './styles';

const SearchScreen = () => {
  return (
    <Container customStyle={styles.container}>
      <View style={styles.containerHeader}>
        <BackButton />
        <Text style={{...FONTS.h2}}>Search Food</Text>
        <Image source={images.user} style={styles.userImage} />
      </View>
      <View style={styles.containerSearch}>
        <View style={styles.containerSubSearch}>
          <Icon name={'search'} size={30} style={styles.searchIcon} />
          <TextInput
            placeholder={'Search your fav food'}
            placeholderTextColor={COLORS.light}
            style={styles.searchTextInput}
          />
        </View>
      </View>
    </Container>
  )
}

export default SearchScreen;
