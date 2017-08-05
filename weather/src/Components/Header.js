import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Location, Permissions } from 'expo';

import { Colors, styles } from '../Themes';
import icons from '../Fixtures/Icons.json';
import { fetchWeather } from './WeatherAPI';
import { tempChanged, weatherChanged } from '../Actions';

class Header extends Component {
  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }

    const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });

    fetchWeather(location.coords.latitude, location.coords.longitude)
      .then((res) => {
        this.props.tempChanged(Math.round(res.temp));
        this.props.weatherChanged(res.weather);
      })
      .catch(error => console.log(`Error: ${error}`));
  }

  render() {
    return (
      <View style={styles.header}>
        <Icon name={icons[this.props.weather]} size={100} color={Colors.white} />
        <Text style={styles.temp}>{ this.props.temp }</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const { temp, weather } = data;

  return { temp, weather };
};

export default connect(mapStateToProps, { tempChanged, weatherChanged })(Header);
