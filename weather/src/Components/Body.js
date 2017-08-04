import React from 'react';
import { Text, View } from 'react-native';
import Highlight from 'react-native-highlight-words';

import { styles } from '../Themes';

const Body = ((props) =>
  <View style={styles.body}>
    <Highlight
      style={styles.title}
      highlightStyle={{ color: 'red' }}
      searchWords={['Fucking']}
      textToHighlight='Build a Fucking Weather App'
    />
    <Text style={styles.subtitle}>Rock that shit!</Text>
  </View>
);

export default Body;
