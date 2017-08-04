import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

import styles from '../Themes/ApplicationStyles';
import Card from './Card';

import dataObjects from '../Fixtures/Textables.json';

export default class TextablesList extends Component {
  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2;

    const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects),
    };
  }

  renderRow(rowData, sectionID) {
    return <Card name={rowData.name} art={rowData.art} />;
  }

  renderHeader(rowData, sectionID) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.boldLabel}>{ sectionID }</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          contentContainerStyle={styles.listContent}
          renderSectionHeader={this.renderHeader}
        />
      </View>
    );
  }
}
