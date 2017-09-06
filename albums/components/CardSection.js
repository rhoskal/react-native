import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = props => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

export default CardSection;

const styles = StyleSheet.create({
  viewStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderColor: '#DDDDDD',
    position: 'relative',
  },
});
