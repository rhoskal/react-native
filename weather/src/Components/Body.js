import React from 'react';
import { Text, View } from 'react-native';
import Highlight from 'react-native-highlight-words';

import { styles } from '../Themes';
import phrases from '../Fixtures/Phrases';

const Body = ((props) =>
  <View style={styles.body}>
    <Highlight
      style={styles.title}
      highlightStyle={{ color: phrases[props.weather].color }}
      searchWords={[phrases[props.weather].highlight]}
      textToHighlight={phrases[props.weather].title}
    />
    <Text style={styles.subtitle}>{ phrases[props.weather].subtitle }</Text>
  </View>
);

export default Body;
