import React from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import Header from './src/components/Header';
import Button from './src/components/Button';
import Spinner from './src/components/Spinner';
import LoginForm from './src/containers/LoginForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCRCQghWNN9iH0IBpWSfq8ffkfP2RvsSss',
      authDomain: 'authentication-91ad7.firebaseapp.com',
      databaseURL: 'https://authentication-91ad7.firebaseio.com',
      projectId: 'authentication-91ad7',
      storageBucket: 'authentication-91ad7.appspot.com',
      messagingSenderId: '370083234066'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderHelper() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        { this.renderHelper() }
      </View>
    );
  }
}
