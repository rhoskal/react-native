import React, { Component } from 'react';
import { Animated, Image, PanResponder, StyleSheet, Text, View } from 'react-native';

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
          source={{ uri: 'https://graph.facebook.com/820165001428876/picture?height=500' }}
        />

        <View style={styles.info}>
          <Text style={styles.name}>Amanda Elise Lee, 28</Text>
          <Text style={styles.bio}>Supermodel</Text>
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
