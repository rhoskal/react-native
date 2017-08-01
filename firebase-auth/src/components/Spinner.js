import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ((props) =>
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={props.size} />
  </View>
);

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Spinner;
