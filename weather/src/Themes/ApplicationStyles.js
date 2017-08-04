import { StyleSheet } from 'react-native';

import Colors from './Colors';
import Metrics from './Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gold,
  },

  body: {
    flex: 5,
    justifyContent: 'flex-end',
    margin: Metrics.mediumMargin,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Metrics.mediumMargin,
  },

  temp: {
    fontSize: 45,
    fontFamily: 'HelveticaNeue-Bold',
    color: Colors.white,
  },

  title: {
    marginBottom: Metrics.smallMargin,
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
