import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Highlight from 'react-native-highlight-words';

import { styles } from '../Themes';
import phrases from '../Fixtures/Phrases';

export default class Body extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.body}>
        <Highlight
          style={styles.title}
          highlightStyle={{ color: 'red' }}
          searchWords={["Satan's"]}
          textToHighlight="It's hotter than Satan's balls."
        />
        <Text style={styles.subtitle}>'The end is near!'</Text>
      </View>
    );
  }
}
