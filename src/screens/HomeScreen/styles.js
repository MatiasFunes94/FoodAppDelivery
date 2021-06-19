import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  containerHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  userImage: {
    width: 40,
    height: 40,
  },
  containerTitle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  emojiTongue: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default styles;