import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Expo from 'expo';

class LoginScreen extends React.Component {
  _loginWithFacebookAsync = async () => {
    const APP_ID = '488637721496153';
    const OPTIONS = {
      permissions: ['public_profile'],
    };
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(APP_ID, OPTIONS);

    if (type === 'success') {
      const FIELDS = ['id', 'first_name', 'last_name', 'gender'];
      const response = await fetch(
        `https://graph.facebook.com/me?fields=${FIELDS.toString()}&access_token=${token}`
      );
      const userData = await response.json();
      console.log(userData);
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} onPress={this._loginWithFacebookAsync}>
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  headerMode: 'none',
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
    height: 35,
    padding: 25,
  },
  btnText: {
    color: 'white',
  },
});
