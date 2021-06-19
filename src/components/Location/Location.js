import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view'

import styles from './styles';
import { FONTS, COLORS } from '../../constants';

const Location = () => {
  return (
    <View style={styles.container}>
      <MaskedView
        style={{ width: 40, height: 40 }}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="location-sharp"
              size={30}
              color="white"
            />
          </View>
        }>
        <LinearGradient
          colors={['orange', 'yellow']}
          style={{ flex: 1 }}
        />
      </MaskedView>
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
