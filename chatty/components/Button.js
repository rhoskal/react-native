import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '../constants';

const Button = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mint,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.dimgray,
    fontSize: 18,
  },
});
