import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  counter: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingStart: 20,
    paddingEnd: 20,
    elevation: 5,
  },
  currentValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  decrement: {
    width: 50,
  },
  increment: {
    width: 50,
  },
});
