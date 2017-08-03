import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from './Styles/Card';

const Card = ((props) =>
  <TouchableOpacity style={styles.container}>
    <Text style={styles.name}>{ props.name }</Text>
    <Text style={styles.art}>{ props.art }</Text>
  </TouchableOpacity>
);

export default Card;
