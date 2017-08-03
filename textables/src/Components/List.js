import _ from 'lodash';
import React, { Component } from 'react';
import { StyleSheet, Text, ListView } from 'react-native';

import data from '../Fixtures/Textables.json';

import Card from './Card/Card';

export default class List extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  render() {
    return (
      <ListView style={styles.grid}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Card name={rowData.name} art={''} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row'
  }
});
