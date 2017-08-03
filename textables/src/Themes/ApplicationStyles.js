import Colors from './Colors';
import Metrics from './Metrics';

const ApplicationStyles = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  groupContainer: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  row: {
    width: Metrics.screenWidth / 2 - Metrics.doubleBaseMargin,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
  },

  sectionTitle: {
    color: Colors.frost,
    alignItems: 'center',
    textAlign: 'center',
  }
}

export default ApplicationStyles
