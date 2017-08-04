import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from './src/Themes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
