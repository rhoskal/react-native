import React, { Component } from 'react';
import { Animated, Image, PanResponder, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

import { Colors, Metrics } from '../../themes';

export default class Card extends Component {
  componentWillMount() {
    this.pan = new Animated.ValueXY();

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y },
      ]),
      onPanResponderRelease: (evt, { dx }) => {
        const absDx = Math.abs(dx);
        const direction = absDx / dx;

        if (absDx > 120) {
          Animated.decay(this.pan, {
            velocity: { x: 3 * direction, y: 0 },
            decelration: 0.995,
          }).start(this.props.onSwipOff);
        } else {
          Animated.spring(this.pan, {
            toValue: { x: 0, y: 0 },
            friction: 4.5,
          }).start();
        }
      },
    });
  }

  render() {
    const { birthday, id, first_name, work } = this.props.profile;
    const bio = (work && work[0] && work[0].position) ? work[0].position.name : null;
    const fbImage = `https://graph.facebook.com/${id}/picture?height=500`;
    const profileBday = moment(birthday, 'MM/DD/YYYY');
    const profileAge = moment().diff(profileBday, 'years');

    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    });

    const animatedStyle = {
      transform: [
        { translateX: this.pan.x },
        { translateY: this.pan.y },
        { rotate: rotateCard },
      ],
    };

    return (
      <Animated.View style={[styles.img, animatedStyle]} {...this._panResponder.panHandlers}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: fbImage }}
        />

        <View style={styles.info}>
          <Text style={styles.name}>{ first_name }, { profileAge }</Text>
          <Text style={styles.bio}>{ bio }</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: Colors.white,
    borderColor: Colors.lightgray,
    borderRadius: 8,
    borderWidth: 1,
    margin: 10,
    width: Metrics.screenWidth - Metrics.marginLarge,
    height: Metrics.screenHeight * 0.7,
    top: (Metrics.screenHeight * 0.3) / 2,
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
