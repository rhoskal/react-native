import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import List from './src/Components/List';
import { Colors } from './src/Themes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
});
