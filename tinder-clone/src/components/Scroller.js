import React, { Component } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

import { Metrics } from '../themes';

export default class Scroller extends Component {
  componentWillMount() {
    this._pan = new Animated.Value(0);

    this._scrollResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this._pan.setOffset(this._pan._value);
        this._pan.setValue(0);
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this._pan },
      ]),
      onPanResponderRelease: (e, { vx }) => {
        this._pan.flattenOffset();
        let move = Math.round(this._pan._value / Metrics.screenWidth) * Metrics.screenWidth;

        if (Math.abs(vx) > 0.25) {
          const direction = vx / Math.abs(vx);
          let scrollPos = 0;

          if (direction > 0) {
            scrollPos = Math.ceil(this._pan._value / Metrics.screenWidth);
          } else if (direction < 0) {
            scrollPos = Math.floor(this._pan._value / Metrics.screenWidth);
          }

          move = scrollPos * Metrics.screenWidth;
        }

        const minScroll = (this.props.screens.length - 1) * -Metrics.screenWidth;

        Animated.spring(this._pan, {
          toValue: this.clamp(move, minScroll, 0),
          bounciness: 0,
        }).start();
      },
    });
  }

  clamp = (num, min, max) => {
    if (num <= min) {
      return min;
    } else if (num >= max) {
      return max;
    }

    return num;
  }

  render() {
    const animation = { transform: [{ translateX: this._pan }] };
    const scrollerWidth = this.props.screens.length * Metrics.screenWidth;

    return (
      <Animated.View
        style={[styles.container, animation, { width: scrollerWidth }]}
        {...this._scrollResponder.panHandlers}>
          { this.props.screens.map((screen, i) =>
            <View key={i} style={{ width: Metrics.screenWidth, height: Metrics.screenHeight }}>
              { screen }
            </View>
          )}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
