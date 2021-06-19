import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const COLORS = {
  primary: '#FFC529',
  secondary: '#FE724C',
  dark: '#272D2F',
  light: '#D7D7D7',
  white: '#fff',
  black: '#000',
  light2: '#f7f7f7',
}

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  padding: 10,
  padding2: 12,
  radius: 15,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 15,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // dimensions
  height,
  width,

  // extra
  row: { flexDirection: 'row' },
}

export const FONTS = {
  largeTitle: { fontFamily: "Gilroy-Regular", fontSize: SIZES.largeTitle, lineHeight: 60 },
  h1: { fontFamily: "Gilroy-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Gilroy-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Gilroy-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Gilroy-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Gilroy-Bold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: "Gilroy-Regular", fontSize: SIZES.body5, lineHeight: 22 },
}
