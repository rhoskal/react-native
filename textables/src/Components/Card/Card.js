import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from './Styles/Card';

const Card = ((props) =>
  <TouchableOpacity style={styles.row}>
    <Text style={styles.boldLabel}>{ props.name }</Text>
    <Text style={styles.label}>{ props.art }</Text>
  </TouchableOpacity>
);

export default Card;
