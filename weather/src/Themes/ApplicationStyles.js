import { StyleSheet } from 'react-native';

import Colors from './Colors';
import Fonts from './Fonts';
import Metrics from './Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gold,
  },

  body: {
    flex: 6,
    justifyContent: 'flex-end',
    margin: Metrics.mediumMargin,
  },

  header: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Metrics.mediumMargin,
  },

  temp: {
    fontSize: 45,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },

  title: {
    marginBottom: Metrics.smallMargin,
    fontSize: 75,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: Fonts.medium,
    color: Colors.white,
  },
});
