import React from 'react';
import { View } from 'react-native';

import { AlbumList, Header } from './components';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}
