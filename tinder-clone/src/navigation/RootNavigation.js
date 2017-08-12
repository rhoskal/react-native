import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

import { HomeScreen, LoginScreen } from '../screens';

const RootStackNavigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Login: { screen: LoginScreen },
  },
  {
    initialRouteName: 'Login',
  },
);

export default class RootNavigation extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCTAk0eA2aXi_iST9ZXI738HYQPfXFjArs',
      authDomain: 'tinder-clone-30f09.firebaseapp.com',
      databaseURL: 'https://tinder-clone-30f09.firebaseio.com',
      projectId: 'tinder-clone-30f09',
      storageBucket: 'tinder-clone-30f09.appspot.com',
      messagingSenderId: '628399878734'
    });
  }

  render() {
    return <RootStackNavigator />;
  }
}
