import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Location, Permissions } from 'expo';
import firebase from 'firebase';
import GeoFire from 'geofire';

import Card from '../components/card/Card';
import Scroller from '../components/Scroller';
import ProfileScreen from '../screens/ProfileScreen';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      profileIndex: 0,
      profiles: [],
    };
  }

  componentWillMount() {
    const { uid } = this.props.navigation.state.params.user;

    this._getCurrentLocation(uid);
    this._getProfilesWithinRadius(uid);
  }

  _getCurrentLocation = async (uid) => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permission Denied');
    } else {
      //const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      //const { latitude, longitude } = location.coords;
      const latitude = 37.39239;
      const longitude = -122.09072;

      const geoRef = new GeoFire(firebase.database().ref('geoData'));
      geoRef.set(uid, [latitude, longitude]);
    }
  }

  _getProfilesWithinRadius = async (uid) => {
    const geoRef = new GeoFire(firebase.database().ref('geoData'));
    const userLocation = await geoRef.get(uid);
    const geoQuery = geoRef.query({
      center: userLocation,
      radius: 10, //km
    });

    geoQuery.on('key_entered', async (uid, location, distance) => {
      //console.log(`${uid} at ${location} is ${distance} km from the center`);
      const user = await this._getUser(uid);
      const profiles = [...this.state.profiles, user.val()];

      this.setState({ profiles });
    });
  }

  _getUser = (uid) => {
    return firebase.database().ref('users').child(uid).once('value');
  }

  _nextCard = () => {
    this.setState({ profileIndex: this.state.profileIndex + 1 });
  }

  _cardStack = () => {
    const { profileIndex } = this.state;

    return (
      <View style={styles.container}>
        {
          this.state.profiles.slice(profileIndex, profileIndex + 3).reverse().map((profile) => {
            return (
              <Card
                key={profile.id}
                profile={profile}
                onSwipOff={this._nextCard}
              />
            );
          })
        }
      </View>
    );
  }

  render() {
    return (
      <Scroller screens={[this._cardStack(), <ProfileScreen user={this.props.navigation.state.params.user} />]} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
