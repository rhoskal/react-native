import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Colors, Metrics } from '../../themes';

export default class Card extends Component {
  render() {
    return (
      <View style={styles.img}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: 'https://graph.facebook.com/820165001428876/picture?height=500' }}
        />

        <View style={styles.info}>
          <Text style={styles.name}>Amanda Elise Lee, 28</Text>
          <Text style={styles.bio}>Supermodel</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    backgroundColor: Colors.white,
    margin: 10,
    marginTop: (Metrics.dHeight * 0.35) / 2,
    marginBottom: (Metrics.dHeight * 0.35) / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.lightgray,
    borderRadius: 8,
  },

  info: {
    margin: 20,
  },

  name: {
    fontSize: 20,
  },

  bio: {
    fontSize: 15,
    color: Colors.darkgray,
  },
});
