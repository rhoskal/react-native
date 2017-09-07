import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Location, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import Highlight from 'react-native-highlight-words';

import { Colors, Fonts, Layout } from '../constants';
import icons from '../fixtures/icons.json';
import phrases from '../fixtures/phrases';
import { fetchWeatherData } from '../state/actions';

class Screen extends React.Component {
  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') console.log('Permission to access location was denied');

    const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    this.props.fetchWeatherData(location.coords.latitude, location.coords.longitude);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: phrases[this.props.weather].background }]}>
        <View style={styles.header}>
          <Icon name={icons[this.props.weather]} size={100} color={Colors.white} />

          <View style={styles.info}>
            <Text style={styles.temp}>{this.props.temp}˚</Text>
            <Text style={styles.subtitle}>{this.props.city}</Text>
          </View>
        </View>

        <View style={styles.body}>
          <Highlight
            style={styles.title}
            highlightStyle={{ color: phrases[this.props.weather].color }}
            searchWords={[phrases[this.props.weather].highlight]}
            textToHighlight={phrases[this.props.weather].title}
          />
          <Text style={styles.subtitle}>{phrases[this.props.weather].subtitle}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const { city, temp, weather } = data;

  return { city, temp, weather };
};

export default connect(mapStateToProps, { fetchWeatherData })(Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gold,
  },
  body: {
    flex: 6,
    justifyContent: 'flex-end',
    margin: Layout.mediumMargin,
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Layout.mediumMargin,
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  temp: {
    fontSize: Fonts.size.h2,
    fontFamily: Fonts.type.bold,
    color: Colors.white,
  },
  title: {
    marginBottom: Layout.smallMargin,
    fontSize: Fonts.size.h1,
    fontFamily: Fonts.type.bold,
    color: Colors.white,
  },
  subtitle: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.medium,
    color: Colors.white,
  },
});
