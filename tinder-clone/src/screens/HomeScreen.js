import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import Card from '../components/card/Card';

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
    firebase.database().ref().child('users').once('value', (snap) => {
      const _profiles = [];

      snap.forEach((profile) => {
        const { name, bio, birthday, id } = profile.val();
        console.log(name);
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
