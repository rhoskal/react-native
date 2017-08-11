import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  dWidth: width < height ? width : height,
  dHeight: width < height ? height : width,
};

export default metrics;
