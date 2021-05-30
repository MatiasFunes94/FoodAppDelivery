import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  containerCustomStyle: {
    backgroundColor: COLORS.primary,
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  burgerImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  foodText: {
    letterSpacing: 2,
  },
  ieText: {
    color: '#fff',
    marginLeft: 3,
    letterSpacing: 2,
  },
  containerTitle: {
    alignItems: 'center',
  },
  containerSvgImage: {
    justifyContent: 'center',
    width: 300,
    height: 350,
  },
  imageChef: {
    position: 'absolute',
    right: 40,
    top: 10,
    width: 300,
    height: 300,
  },
  buttonGetStarted: {
    alignSelf: 'flex-end',
    left: 30,
  },
});

export default styles;