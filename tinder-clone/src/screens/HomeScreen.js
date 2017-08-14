import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Location, Permissions } from 'expo';
import firebase from 'firebase';
import GeoFire from 'geofire';

import Card from '../components/card/Card';
import Scroller from '../components/Scroller';
import { MatchScreen, ProfileScreen } from '../screens';
import filter from '../modules/Filter';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      profileIndex: 0,
      profiles: [],
      user: this.props.navigation.state.params.user,
    };
  }

  componentWillMount() {
    const { uid } = this.state.user;

    this._getCurrentLocation(uid);
    firebase.database().ref('users').child(uid).on('value', snap => {
      const user = snap.val();

      this.setState({
        profileIndex: 0,
        profiles: [],
        user,
      });

      this._getProfilesWithinRadius(user.uid, user.distance);
    });
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

  _getProfilesWithinRadius = async (uid, distance) => {
    const geoRef = new GeoFire(firebase.database().ref('geoData'));
    const userLocation = await geoRef.get(uid);
    const swipedProfiles = await this._getSwiped(uid);
    const geoQuery = geoRef.query({
      center: userLocation,
      radius: distance, //km
    });

    geoQuery.on('key_entered', async (uid, location, distance) => {
      //console.log(`${uid} at ${location} is ${distance} km from the center`);
      const user = await this._getUser(uid);
      const profiles = [...this.state.profiles, user.val()];
      const filtered = filter(profiles, this.state.user, swipedProfiles);

      this.setState({ profiles: filtered });
    });
  }

  _getUser = (uid) => {
    return firebase.database().ref('users').child(uid).once('value');
  }

  _nextCard = (swipedRight, profileUID) => {
    const userUID = this.state.user.uid;
    this.setState({ profileIndex: this.state.profileIndex + 1 });

    if (swipedRight) {
      this._relate(userUID, profileUID, true);
    } else {
      this._relate(userUID, profileUID, false);
    }
  }

  _relate = (userUid, profileUid, status) => {
    const relationUpdate = {};
    relationUpdate[`${userUid}/liked/${profileUid}`] = status;
    relationUpdate[`${profileUid}/likedBack/${userUid}`] = status;

    firebase.database().ref('relationships').update(relationUpdate);
  }

  _getSwiped = (uid) => {
    return firebase.database().ref('relationships').child(uid).child('liked')
      .once('value')
      .then(snap => snap.val() || {});
  }

  _cardStack = () => {
    const { profileIndex } = this.state;

    return (
      <View style={styles.container}>
        {
          this.state.profiles.slice(profileIndex, profileIndex + 3).reverse().map((profile) => {
            return (
              <Card key={profile.id} profile={profile} onSwipOff={this._nextCard} />
            );
          })
        }
      </View>
    );
  }

  render() {
    return (
      <Scroller
        screens={[
          this._cardStack(),
          <ProfileScreen user={this.state.user} />,
          <MatchScreen navigation={this.props.navigation} user={this.state.user} />
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
