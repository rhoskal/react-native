import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../constants';

const Button = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pink,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 45,
  },
});
