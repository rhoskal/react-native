import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

import { Colors } from '../../themes';

const Facebook = (() =>
  <TouchableHighlight style={styles.btn}>
    <View style={styles.layout}>
      <Icon name={'facebook-f'} size={20} color={'white'} />
      <Text style={styles.text}>Login with Facebook</Text>
    </View>
  </TouchableHighlight>
);

export default Facebook;

const styles = StyleSheet.create({
  btn: {
    height: 40,
    width: 220,
    backgroundColor: Colors.facebook,
    borderRadius: 50,
  },

  layout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 15,
  },
});
