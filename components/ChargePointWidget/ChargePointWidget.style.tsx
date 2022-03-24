import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '98%',
    height: '50%',
    marginTop: 10,
  },
  list: {
    borderRadius: 0,
  },
  'list:last-child': {
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    marginTop: 3,
    borderRadius: 8,
    color: 'black',
    borderStyle: 'solid',
    borderColor: 'purple',
  },
});
