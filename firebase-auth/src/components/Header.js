import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerFormat}>
        <Text style={{ fontSize: 20 }}>{ this.props.headerText }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerFormat: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});
