import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const Container = ({ children, customStyle }) => {
  return (
    <SafeAreaView style={{ ...styles.container, ...customStyle }}>
      {children}
    </SafeAreaView>
  )
}

export default Container;