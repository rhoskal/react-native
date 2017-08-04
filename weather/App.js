import React, { Component } from 'react';
import { StatusBar, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Location, Permissions } from 'expo';

import { Colors, styles } from './src/Themes';
import { fetchWeather } from './src/Components/WeatherAPI';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0,
      weather: 'Unknown'
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    const location = await Location.getCurrentPositionAsync({});

    fetchWeather(location.coords.latitude, location.coords.longitude)
      .then(res => this.setState({
        temp: res.temp,
        weather: res.weather
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.header}>
          <Icon name={'ios-sunny'} size={80} color={Colors.white} />
          <Text style={styles.temp}>{ this.state.temp }˚C</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Build a <Text style={{ color: 'red' }}>Fucking</Text> Weather App</Text>
          <Text style={styles.subtitle}>Lets Make it Rain</Text>
        </View>
      </View>
    );
  }
}
