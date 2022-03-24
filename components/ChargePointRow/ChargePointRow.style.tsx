import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 2,
    backgroundColor: '#FFF',
    elevation: 2,
    borderStyle: 'solid',
  },
  'container:last-child': {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
  },
  containerDirections: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#e6e1e1',
    padding: 'none',
    width: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAvailable: {
    display: 'flex',
    flexDirection: 'column',
    padding: 'none',
    width: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
    marginLeft: 10,
  },
  availText: {
    flex: 1,
    fontSize: 11,
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
    padding: 10,
    width: '50%',
  },
  description: {
    fontSize: 11,
    marginTop: 4,
  },
  photo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
