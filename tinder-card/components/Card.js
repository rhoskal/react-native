import React, { Component } from 'react';
import { Animated, Dimensions, Image, PanResponder, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

export default class Card extends Component {
  componentWillMount() {
    this._pan = new Animated.ValueXY();

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this._pan.x, dy: this._pan.y },
      ]),
      onPanResponderRelease: (evt, { dx }) => {
        const absDx = Math.abs(dx);
        const direction = absDx / dx;

        if (absDx > 120) {
          Animated.decay(this._pan, {
            velocity: { x: 3 * direction, y: 0 },
            decelration: 0.995,
          }).start(this.props.onSwipOff);
        } else {
          Animated.spring(this._pan, {
            toValue: { x: 0, y: 0 },
            friction: 4.5,
          }).start();
        }
      },
    });
  }

  render() {
    const { bio, birthday, id, name } = this.props.profile;
    const fbImage = `https://graph.facebook.com/${id}/picture?height=500`;
    const profileBday = moment(birthday, 'MM/DD/YYYY');
    const profileAge = moment().diff(profileBday, 'years');

    const rotateCard = this._pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    });

    const animatedStyle = {
      transform: [
        { translateX: this._pan.x },
        { translateY: this._pan.y },
        { rotate: rotateCard },
      ],
    };

    return (
      <Animated.View style={[styles.card, animatedStyle]} {...this._panResponder.panHandlers}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: fbImage }}
        />

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20 }}>{ name }, { profileAge }</Text>
          <Text style={{ fontSize: 15, color: 'darkgrey' }}>{ bio }</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    overflow: 'hidden',
    width: width - 20,
    height: height * 0.7,
    top: (height * 0.3) / 2,
  },
});
