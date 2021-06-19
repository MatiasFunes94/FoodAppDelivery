import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

const MenuButton = () => {
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.5}
    >
      <View style={{...styles.item, width: 17, alignSelf: 'flex-end'}} />
      <View style={{...styles.item, width: 30}} />
      <View style={{...styles.item, width: 17}} />
    </TouchableOpacity>
  )
}

export default MenuButton;
