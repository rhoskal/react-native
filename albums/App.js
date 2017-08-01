import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/containers/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.scroll}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  }
});
