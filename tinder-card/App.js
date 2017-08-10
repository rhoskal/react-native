import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Card from './components/Card';
import Profiles from './fixtures/Profiles';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileIndex: 0,
    };
  }

  _nextCard = () => {
    this.setState({ profileIndex: this.state.profileIndex + 1 });
  }

  render() {
    const { profileIndex } = this.state;

    return (
      <View style={styles.container}>
        { Profiles.slice(profileIndex, profileIndex + 3).reverse().map((profile) => {
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
