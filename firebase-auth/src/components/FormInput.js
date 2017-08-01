import React from 'react';
import { TextInput, View, Text } from 'react-native';

const FormInput = ((props) =>
  <View style={styles.form}>
    <Text style={styles.label}>{ props.label }</Text>
    <TextInput
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      autoCorrect={false}
      autoCapitalize={'none'}
      keyboardType={props.keyboardType}
      style={styles.input}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  </View>
);

const styles = {
  input: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },

  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },

  form: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default FormInput;
