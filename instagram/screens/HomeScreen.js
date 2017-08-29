import React from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';

import { MonoText, Post } from '../components';

export default class HomeScreen extends React.Component {
  _onPress() {
    //this.props.navigation.navigate('Create');
    console.log('pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Post />
        </ScrollView>

        <Button onPress={this._onPress} title="Create Post" />
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
