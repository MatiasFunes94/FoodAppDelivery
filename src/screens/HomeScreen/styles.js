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
  containerTitle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  emojiTongue: {
    width: 30,
    height: 30,
    marginLeft: 10,
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
  containerChips: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 10,
    marginVertical: 10,
    padding: 10,
    borderColor: COLORS.light,
    borderWidth: 0.5,
  },
});

export default styles;