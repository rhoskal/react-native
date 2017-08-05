import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Body, Header } from './src/Components';
import { styles } from './src/Themes';
import reducers from './src/Reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header />
          <Body />
        </View>
      </Provider>
    );
  }
}
