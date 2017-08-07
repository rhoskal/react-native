import React, { Component } from 'react';
import { Animated, Image, cardPanResponder, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  componentWillMount() { //I think he's trying to create a constructor here...
    this.pan = new Animated.ValueXY();

    this.cardPanResponder = cardPanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y },
      ]),
      onPanResponderRelease: (e, gesture) => console.log('Released', gesture.moveY),
    });
  }

  render() {
    const animatedStyle = {
      transform: [
        { translateX: this.pan.x },
        { translateY: this.pan.y },
      ],
    };

    return (
      <Animated.View style={[styles.card, animatedStyle]} {...this.cardPanResponder.panHandlers}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: 'https://graph.facebook.com/820165001428876/picture?height=500' }}
        />

        <View style={{ margin: 20 }}>
          <Text style={{ fontSize: 20 }}>Candice, 28</Text>
          <Text style={{ fontSize: 15, color: 'darkgrey' }}>Supermodel</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 100,
    marginTop: 100,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
