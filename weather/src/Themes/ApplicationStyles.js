import { StyleSheet } from 'react-native';

import Colors from './Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow,
  },

  body: {
    flex: 5,
    justifyContent: 'flex-end',
    margin: 10,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  temp: {
    fontSize: 45,
    fontFamily: 'HelveticaNeue-Bold',
    color: Colors.white,
  },

  title: {
    marginBottom: 5,
    fontSize: 75,
    fontFamily: 'HelveticaNeue-Bold',
    color: Colors.white,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Medium',
    color: Colors.white,
  },
});
