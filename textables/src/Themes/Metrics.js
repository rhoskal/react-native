import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export default metrics
