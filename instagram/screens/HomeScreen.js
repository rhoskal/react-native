import React from 'react';
import { StyleSheet, View } from 'react-native';

import { MonoText } from '../components';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MonoText>Instagram Clone</MonoText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
