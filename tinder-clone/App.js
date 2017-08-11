import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import Card from './src/components/card/Card';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileIndex: 0,
      profiles: [],
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTAk0eA2aXi_iST9ZXI738HYQPfXFjArs',
      authDomain: 'tinder-clone-30f09.firebaseapp.com',
      databaseURL: 'https://tinder-clone-30f09.firebaseio.com',
      projectId: 'tinder-clone-30f09',
      storageBucket: 'tinder-clone-30f09.appspot.com',
      messagingSenderId: '628399878734'
    });

    firebase.database().ref().child('users').once('value', (snap) => {
      const _profiles = [];

      snap.forEach((profile) => {
        const { name, bio, birthday, id } = profile.val();
        _profiles.push({ name, bio, birthday, id });
      });

      this.setState({ profiles: _profiles });
    });
  }

  _nextCard = () => {
    this.setState({ profileIndex: this.state.profileIndex + 1 });
  }

  render() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
