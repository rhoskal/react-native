import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { MonoText } from '../components';
import { Colors } from '../constants';

const Button = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <MonoText style={styles.buttonText}>{props.title}</MonoText>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    marginVertical: 30,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.red,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
