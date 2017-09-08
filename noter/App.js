import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import { HomeScreen } from './screens';
import store from './state/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}
