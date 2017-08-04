import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Colors, styles } from '../Themes';

const Body = ((props) =>
  <View style={styles.header}>
    <Icon name={'ios-sunny'} size={65} color={Colors.white} />
    <Text style={styles.temp}>{ props.temp }˚C</Text>
  </View>
);

export default Body;
