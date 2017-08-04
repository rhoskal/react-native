import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Colors, styles } from './src/Themes';

export default class App extends Component {
  componentWillMount() {
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      (error) => alert(error.toString()),
      { timeout: 10000 },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.header}>
          <Icon name={'ios-sunny'} size={80} color={Colors.white} />
          <Text style={styles.temp}>24˚C</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Build a <Text style={{ color: 'red' }}>Fucking</Text> Weather App</Text>
          <Text style={styles.subtitle}>Lets Make it Rain</Text>
        </View>
      </View>
    );
  }
}
