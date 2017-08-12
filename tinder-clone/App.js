import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import RootNavigation from './src/navigation/RootNavigation';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
