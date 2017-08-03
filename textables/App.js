import React, { Component } from 'react';
import { View } from 'react-native';

import TextablesList from './src/Components/TextablesList';
import { ApplicationStyles, Colors } from './src/Themes';

export default class App extends Component {
  render() {
    return (
      <View style={ApplicationStyles.container}>
        <TextablesList />
      </View>
    );
  }
}
