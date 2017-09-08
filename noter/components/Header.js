import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import { Colors, Layout } from '../constants';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{props.title}</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: Layout.mediumMargin,
    borderBottomColor: Colors.gray,
    ...Platform.select({
      android: {
        marginTop: Constants.statusBarHeight,
      },
    }),
  },
  headerText: {
    color: Colors.white,
    fontSize: 18,
    padding: 25,
  },
});
