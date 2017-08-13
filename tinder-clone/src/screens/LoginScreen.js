import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Expo from 'expo';
import firebase from 'firebase';

import Facebook from '../components/login/Facebook';
import { Colors } from '../themes';

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      showSpinner: true,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        this.firebaseRef = firebase.database().ref('users');
        this.firebaseRef.child(auth.uid).on('value', snap => {
          const user = snap.val();

          if (user != null) {
            this.firebaseRef.child(auth.uid).off('value');
            this._goHome(user);
          }
        });
      } else {
        this.setState({ showSpinner: false });
      }
    });
  }

  _goHome(user) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home', params: { user } })]
    });

    this.props.navigation.dispatch(resetAction);
  }

  _authenticate(token) {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);

    return firebase.auth().signInWithCredential(credential);
  }

  _createUser = (uid, userData) => {
    const defaults = {
      uid,
      distance: 20,
      ageRange: [18, 35],
      showMen: false,
      showWomen: false,
    };

    firebase.database().ref('users').child(uid).update({ ...userData, ...defaults });
  }

  _logIn = async () => {
    this.setState({ showSpinner: true });
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
        { this.state.showSpinner ?
          <ActivityIndicator animating={this.state.showSpinner} size={'large'} /> :
          <Facebook onPress={this._logIn.bind(this)} />
        }
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
