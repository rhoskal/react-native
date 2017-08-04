import React, { Component } from 'react';
import { View } from 'react-native';

import TextablesList from './src/Components/TextablesList';
import styles from './src/Themes/ApplicationStyles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextablesList />
      </View>
    );
  }
}
