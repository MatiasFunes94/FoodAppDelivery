import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import { FONTS, COLORS } from '../../constants';

const Location = () => {
  return (
    <View style={styles.container}>
      <Icon 
        name={'location-sharp'}
        size={25}
        color={'orange'}
        style={{marginRight: 5}}
      />
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={{...FONTS.h4}}
      >
        New York,
      </Text>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={{marginLeft: 5, ...FONTS.body3, color: COLORS.dark }}
      >
        US
      </Text>
    </View>
  )
}

export default Location;
