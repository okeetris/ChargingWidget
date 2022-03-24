import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  textContainerWelcome: {
    paddingTop: '10%',
    width: '100%',
    marginTop: '5%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainerUserName: {
    width: '100%',
    marginTop: '2%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textContainerDesc: {
    width: '100%',
    marginTop: '1%',
    fontSize: 15,
    //fontWeight: 'bold',
  },
  headingContainer: {
    paddingHorizontal: '6%',
  },
  scroll: {
    width: '90%',
  },
});
