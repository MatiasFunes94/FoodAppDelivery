import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const MenuButton = () => {
  return (
    <View style={styles.container}>
      <View style={{...styles.item, width: 17, alignSelf: 'flex-end'}} />
      <View style={{...styles.item, width: 30}} />
      <View style={{...styles.item, width: 17}} />
    </View>
  )
}

export default MenuButton;
