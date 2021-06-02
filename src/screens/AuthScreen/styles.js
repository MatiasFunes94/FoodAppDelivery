import { StyleSheet } from 'react-native';
import {
  SIZES,
  COLORS,
} from '../../constants';

const styles = StyleSheet.create({
  containerImage: {
    backgroundColor: COLORS.light2,
  },
  imageFoodMaterial: {
    height: SIZES.height * 0.45,
    width: SIZES.width * 0.85,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'center',
    color: COLORS.dark
  },
  lightBackground: {
    backgroundColor: COLORS.light2,
  },
  containerAuth: {
    flex: 1,
    paddingHorizontal: 30,
  }
})

export default styles;