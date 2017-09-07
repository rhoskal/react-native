import React from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';

import Card from './Card';
import { Colors, Layout } from '../constants';
import data from '../fixtures/textables.json';

class TextablesList extends React.Component {
  constructor(props) {
    super(props);

    const rowHasChanged = (r1, r2) => r1 !== r2;
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2;

    const ds = new ListView.DataSource({ rowHasChanged, sectionHeaderHasChanged });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(data),
    };
  }

  renderRow(rowData, sectionID) {
    return <Card name={rowData.name} art={rowData.art} />;
  }

  renderHeader(rowData, sectionID) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.boldLabel}>{sectionID}</Text>
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

export default TextablesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.teal,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: Layout.smallMargin,
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sectionHeader: {
    paddingTop: Layout.doubleBaseMargin,
    width: Layout.screenWidth,
    margin: Layout.baseMargin,
    backgroundColor: Colors.teal,
  },
});
