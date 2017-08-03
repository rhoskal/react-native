import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './Styles/Card';

const Card = ((props) =>
  <View style={styles.container}>
    <Text style={styles.name}>{ props.name }</Text>
    <Text>{ props.art }</Text>
  </View>
);

export default Card;
