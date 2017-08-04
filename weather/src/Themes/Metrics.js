import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  smallMargin: 5,
  mediumMargin: 10,
  largeMargin: 15,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

export default metrics;
