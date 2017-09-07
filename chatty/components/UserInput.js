import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Input = props => (
  <View style={styles.container}>
    <TextInput
      autoCapitalize={'none'}
      autoCorrect={false}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.title}
      value={props.value}
      onChangeText={text => props.onChangeText(text)}
      underlineColorAndroid={'rgba(0,0,0,0)'}
      keyboardType={props.keyboardType}
      style={styles.input}
    />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  input: {
    padding: 10,
    backgroundColor: '#efefef',
    height: 50,
    borderRadius: 5,
  },
});
