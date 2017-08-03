import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TextablesList from './src/Components/List/TextablesList';
import { Colors } from './src/Themes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextablesList />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
