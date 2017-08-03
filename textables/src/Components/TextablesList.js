import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

import data from '../Fixtures/Textables.json';

import { ApplicationStyles } from '../Themes';
import Card from './Card/Card';

export default class TextablesList extends Component {
  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2;

    const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  renderRow(rowData) {
    //return <Card name={rowData.name} art={rowData.art};
    return (
      <View style={ApplicationStyles.row}>
        <Text>{ rowData.name }</Text>
        <Text>{ rowData.art }</Text>
      </View>
    );
  }

  // renderHeader(rowData) {
  //
  // }


  // <ListView
  //   dataSource={this.state.dataSource}
  //   renderRow={(rowData) => <Card name={rowData.name} art={rowData.art} />}
  // />
  render() {
    return (
      <View style={ApplicationStyles.row}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </View>
    );
  }
}
