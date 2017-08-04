import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../Themes';

const Body = ((props) =>
  <View style={styles.body}>
    <Text style={styles.title}>Build a <Text style={{ color: 'red' }}>Fucking</Text> Weather App</Text>
    <Text style={styles.subtitle}>Lets Make it Rain</Text>
  </View>
);

export default Body;
