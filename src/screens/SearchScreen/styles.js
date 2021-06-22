import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.light2,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  containerHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
})

export default styles;