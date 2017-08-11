import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  marginSmall: 10,
  marginLarge: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default metrics;
