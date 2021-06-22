import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: COLORS.light2,
    justifyContent: 'flex-start',
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
  containerSearch: {
    marginTop: 20,
  },
  containerSubSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 55,
    backgroundColor: COLORS.white,
    borderColor: COLORS.light,
    borderWidth: 0.5,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchTextInput: {
    marginLeft: 10,
    color: COLORS.dark,
  },
})

export default styles;