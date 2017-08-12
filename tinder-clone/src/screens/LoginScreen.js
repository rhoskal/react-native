import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Expo from 'expo';
import firebase from 'firebase';

import Facebook from '../components/login/Facebook';
import { Colors } from '../themes';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('Home');
      }
    });
  }

  _authenticate(token) {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);

    return firebase.auth().signInWithCredential(credential);
  }

  _createUser = (uid, userData) => {
    firebase.database().ref('users').child(uid).update(userData);
  }

  _logIn = async () => {
    const APP_ID = '1298495360262445';
    const OPTIONS = {
      permissions: [
        'public_profile',
        'user_birthday',
        'user_work_history',
        'email'
      ]
    };
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, OPTIONS);

    if (type === 'success') {
      const FIELDS = ['id', 'first_name', 'last_name', 'gender', 'birthday', 'work'];
      const response = await fetch(`https://graph.facebook.com/me?fields=${FIELDS.toString()}&access_token=${token}`);
      const userData = await response.json();
      const { uid } = await this._authenticate(token);

      this._createUser(uid, userData);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Facebook onPress={this._logIn.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
