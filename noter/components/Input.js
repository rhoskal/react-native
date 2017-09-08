import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { Colors } from '../constants';

const Input = props => (
  <TextInput
    placeholder={props.title}
    placeholderTextColor="white"
    underlineColorAndroid="transparent"
    autoCorrect={false}
    onChangeText={props.onChangeText}
    value={props.value}
    style={styles.input}
  />
);

export default Input;

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    color: Colors.white,
    fontSize: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: Colors.black,
    borderTopWidth: 2,
    borderTopColor: Colors.gray,
  },
});
