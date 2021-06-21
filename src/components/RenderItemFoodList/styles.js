import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../constants';

const styles = StyleSheet.create({
  containerFoodList: {
    borderRadius: 20,
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 5,
    width: 180,
    height: 330,
    backgroundColor: COLORS.white,
    borderColor: COLORS.light,
    borderWidth: 0.5,
  },
  imageFood: {
    height: 200,
    width: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nameFood: {
    ...FONTS.h4,
    textAlign: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
    paddingHorizontal: 10,
    color: COLORS.dark,
  },
  containerCalories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  caloriesText: {
    textAlign: 'center',
    marginTop: 5,
    ...FONTS.h5,
    color: COLORS.secondary,
  },
  containerPrice: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export default styles;