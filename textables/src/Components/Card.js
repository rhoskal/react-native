import React from 'react';
import { Clipboard, StyleSheet, Text, TouchableOpacity } from 'react-native';

import styles from '../Themes/ApplicationStyles';

const Card = ((props) =>
  <TouchableOpacity style={styles.row} onPress={() => Clipboard.setString(props.art)}>
    <Text style={styles.boldLabel}>{ props.name }</Text>
    <Text style={styles.label}>{ props.art }</Text>
  </TouchableOpacity>
);

export default Card;
