import React from 'react';
import { Clipboard, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, Layout } from '../constants';

const styles = StyleSheet.create({
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'center',
    marginBottom: Layout.smallMargin,
  },
  label: {
    alignSelf: 'center',
    color: Colors.black,
    textAlign: 'center',
  },
  row: {
    width: Layout.screenWidth / 2 - Layout.doubleBaseMargin,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Layout.baseMargin,
    backgroundColor: Colors.frost,
    borderRadius: Layout.borderRadius,
    elevation: 1,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

const Card = props => (
  <TouchableOpacity style={styles.row} onPress={() => Clipboard.setString(props.art)}>
    <Text style={styles.boldLabel}>{props.name}</Text>
    <Text style={styles.label}>{props.art}</Text>
  </TouchableOpacity>
);

export default Card;
