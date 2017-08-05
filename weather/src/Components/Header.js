import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Colors, styles } from '../Themes';
import icons from '../Fixtures/Icons.json';

export default class Body extends Component {
  //add touch w/ no feedback to temp--> if pressed change to fahrenheit and celcius
  //this will require a state so change to class component -- use redux?
  constructor(props) {
    super(props);

    this.state = {
      units: 'Celcius',
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <Icon name={icons[this.props.weather]} size={80} color={Colors.white} />
        <Text style={styles.temp}>{ this.props.temp }˚C</Text>
      </View>
    );
  }
}
