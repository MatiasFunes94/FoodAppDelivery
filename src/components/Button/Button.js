import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export const Button = ({
  children,
  customStyle,
  customText,
  iconName = null,
  iconColor = null,
  iconSize = 20,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          ...styles.touchableButton,
          ...customStyle,
        }}>
        <Text
          style={{
            ...styles.textButton,
            ...customText,
          }}>
          {children}
        </Text>
        {iconName && (
          <Icon
            name={iconName}
            color={iconColor}
            size={iconSize}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

