import { StyleSheet } from 'react-native';

import { Colors, Metrics } from '../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teal,
  },

  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },

  label: {
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'center',
  },

  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  row: {
    width: Metrics.screenWidth / 2 - Metrics.doubleBaseMargin,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.frost,
    borderRadius: 5,
    elevation: 1,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  
  sectionHeader: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.teal,
  },
});
