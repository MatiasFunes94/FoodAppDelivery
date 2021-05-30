import { StyleSheet } from 'react-native';

import { 
  FONTS,
  COLORS,
  SIZES,
} from '../../constants';

const styles = StyleSheet.create({
  touchableButton: {
    backgroundColor: COLORS.dark,
    width: SIZES.width * 0.5,
    height: SIZES.height * 0.07,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: COLORS.white,
    ...FONTS.body2,
    textAlign: 'center',
  },
  icon: {
    marginLeft: 15,
  }
});

export default styles;