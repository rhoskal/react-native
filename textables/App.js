import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TextablesList } from './components';
import { Colors } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teal,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextablesList />
      </View>
    );
  }
}
