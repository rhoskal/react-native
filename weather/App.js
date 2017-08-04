import React, { Component } from 'react';
import { View } from 'react-native';
import { Location, Permissions } from 'expo';

import { fetchWeather } from './src/Components/WeatherAPI';
import { Body, Header } from './src/Components';
import styles from './src/Themes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0,
      weather: 'Unknown'
    };
  }

  componentWillMount() {
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
        <Header temp={this.state.temp} />
        <Body />
      </View>
    );
  }
}
