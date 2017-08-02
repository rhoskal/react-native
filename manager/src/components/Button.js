import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ((props) =>
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.text}>{ props.children }</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginLeft: 5,
    marginRight: 5
  }
});

export default Button;
