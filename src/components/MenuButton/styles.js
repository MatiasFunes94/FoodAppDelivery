import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 25,
    justifyContent: 'space-between',
  },
  item: {
    borderWidth: 2,
    borderColor: COLORS.dark,
    borderRadius: 20,
  },
});

export default styles;