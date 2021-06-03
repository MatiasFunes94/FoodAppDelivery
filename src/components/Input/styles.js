import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  input: {
    borderBottomColor: COLORS.light,
    borderBottomWidth: 2,
    color: COLORS.dark
  }
})

export default styles;