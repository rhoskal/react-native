import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Location, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import Highlight from 'react-native-highlight-words';

import { Colors, styles } from '../Themes';
import icons from '../Fixtures/Icons.json';
import { fetchWeatherData } from '../Actions';
import phrases from '../Fixtures/Phrases';

class Screen extends Component {
  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') console.log('Permission to access location was denied');

    const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    this.props.fetchWeatherData(location.coords.latitude, location.coords.longitude);
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: phrases[this.props.weather].background }]}>
        <View style={styles.header}>
          <Icon name={icons[this.props.weather]} size={100} color={Colors.white} />
          <Text style={styles.temp}>{ this.props.temp }˚</Text>
        </View>

        <View style={styles.body}>
          <Highlight
            style={styles.title}
            highlightStyle={{ color: phrases[this.props.weather].color }}
            searchWords={[phrases[this.props.weather].highlight]}
            textToHighlight={phrases[this.props.weather].title}
          />
          <Text style={styles.subtitle}>{ phrases[this.props.weather].subtitle }</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const { temp, weather } = data;

  return { temp, weather };
};

export default connect(mapStateToProps, { fetchWeatherData })(Screen);
