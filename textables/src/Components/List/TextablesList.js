import React, { Component } from 'react';
import { ListView, View } from 'react-native';

import styles from './Styles/ListStyles';
import Card from '../Card/Card';

import dataObjects from '../../Fixtures/Textables.json';

export default class TextablesList extends Component {
  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2;

    const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged });

    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
  }

  renderRow(rowData) {
    return <Card name={rowData.name} art={rowData.art} />;
  }

  // renderHeader(rowData) {
  //  return <View style={styles.sectionHeader}><Text style={styles.boldLabel}>{ sectionID }</Text></View>;
  // }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          //onLayout={this.onLayout}
          contentContainerStyle={styles.listContent}
          // enableEmptySections  https://facebook.github.io/react-native/docs/listview.html
        />
      </View>
    );
  }
}
