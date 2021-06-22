import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../constants';

const BackButton = () => {
  const { goBack } = useNavigation();
  return (
    <View>
      <Icon
        name='chevron-back'
        size={25}
        color={COLORS.black}
        onPress={() => goBack()}
      />
    </View>
  )
}

export default BackButton;
