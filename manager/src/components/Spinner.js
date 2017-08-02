import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = ((props) =>
  <View style={styles.spinner}>
    <ActivityIndicator size={props.size} />
  </View>
);

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Spinner;
