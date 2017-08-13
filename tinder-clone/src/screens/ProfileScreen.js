import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Slider from 'react-native-multislider';
import firebase from 'firebase';

import { Colors } from '../themes';
import CircleImage from '../components/CircleImage';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ageRangeValues: this.props.user.ageRange,
      distanceValue: [this.props.user.distance],
      showMen: this.props.user.showMen,
      showWomen: this.props.user.showWomen,
    };
  }

  _updateUser = (key, value) => {
    const { uid } = this.props.user;
    firebase.database().ref('users').child(uid).update({ [key]: value });
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
          onValuesChangeFinish={val => this._updateUser('distance', val[0])}
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
          onValuesChangeFinish={val => this._updateUser('ageRange', val)}
        />

        <View style={styles.sex}>
          <Text>Show Men</Text>
          <Switch
            value={this.state.showMen}
            onValueChange={val => {
              this.setState({ showMen: val });
              this._updateUser('showMen', val);
            }}
          />
        </View>

        <View style={styles.sex}>
          <Text>Show Women</Text>
          <Switch
            value={this.state.showWomen}
            onValueChange={val => {
              this.setState({ showWomen: val });
              this._updateUser('showWomen', val);
            }}
          />
        </View>
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

  sex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
});
