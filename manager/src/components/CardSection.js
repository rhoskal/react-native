import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = ((props) =>
  <View style={styles.section}>
    { props.children }
  </View>
);

const styles = StyleSheet.create({
  section: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderColor: '#DDDDDD',
    position: 'relative'
  }
});

export default CardSection;
