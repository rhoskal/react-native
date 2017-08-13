import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from 'react-native-multislider';

import { Colors } from '../themes';
import CircleImage from '../components/CircleImage';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageRangeValues: [18, 30],
      distanceValue: [5],
    };
  }

  render() {
    const { first_name, work, id } = this.props.user;
    const bio = (work && work[0] && work[0].position) ? work[0].position.name : null;

    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <CircleImage facebookID={id} size={100} />
          <Text style={styles.name}>{ first_name }</Text>
          <Text style={styles.bio}>{ bio }</Text>
        </View>

        <View style={styles.label}>
          <Text>Distance</Text>
          <Text style={styles.bio}>{ this.state.distanceValue }km</Text>
        </View>

        <Slider
          min={1}
          max={30}
          values={this.state.distanceValue}
          onValuesChange={val => this.setState({ distanceValue: val })}
        />

        <View style={styles.label}>
          <Text>Age Range</Text>
          <Text style={styles.bio}>{ this.state.ageRangeValues.join('-') }</Text>
        </View>

        <Slider
          min={18}
          max={70}
          values={this.state.ageRangeValues}
          onValuesChange={val => this.setState({ ageRangeValues: val })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 20,
  },

  profile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
  },

  bio: {
    fontSize: 15,
    color: Colors.darkgray,
  },

  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
});
