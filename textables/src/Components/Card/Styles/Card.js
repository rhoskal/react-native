import { StyleSheet } from 'react-native';

import { Colors, Metrics } from '../../../Themes';

export default StyleSheet.create({
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },

  label: {
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
  },

  row: {
    //width: 'calc(Metrics.screenWidth / 2 - Metrics.doubleBaseMargin)',
    width: 125,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
  },
});
