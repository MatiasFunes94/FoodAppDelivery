import React from 'react';
import { 
  View, 
  Text,
  TextInput,
} from 'react-native';

import { 
  FONTS,
  COLORS
} from '../../constants';
import styles from './styles';

export const Input = (props) => {
  const {
    title,
    placeholder,
    value,
    onChangeText,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={FONTS.body3}>{title}</Text>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor={COLORS.light}
        value={value}
        onChangeText={onChangeText}
        style={{
          ...styles.input
        }}
      />
    </View>
  )
}