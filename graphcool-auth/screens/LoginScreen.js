import React from 'react';
import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { compose, graphql } from 'react-apollo';
import { Facebook } from 'expo';

import { FACEBOOK_LOGIN_MUTATION, UPDATE_USER_MUTATION } from '../api/graphcool';

class LoginScreen extends React.Component {
  _loginWithFacebookAsync = async () => {
    const APP_ID = '488637721496153';
    const OPTIONS = { permissions: ['public_profile'] };
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(APP_ID, OPTIONS);

    switch (type) {
      case 'success': {
        await this.props
          .facebookLogin({
            variables: { facebookToken: token },
          })
          .then(({ data }) => {
            console.log(data.authenticateFacebookUser.token);
            console.log(token);
            this._storeAuthTokensLocally(data.authenticateFacebookUser.token, token);
            this.props.navigation.navigate('Home');
          })
          .catch(e => {
            console.log(e);
          });
        break;
      }
      case 'cancel': {
        Alert.alert('Cancelled!', 'Login was cancelled!');
        break;
      }
      default: {
        Alert.alert('Error', 'Facebook login returned error.');
      }
    }
  };

  _storeAuthTokensLocally = async (graphcoolToken, socialLoginToken) => {
    try {
      await AsyncStorage.setItem('graphcoolToken', graphcoolToken);
      await AsyncStorage.setItem('socialLoginToken', socialLoginToken);
    } catch (e) {
      console.log(e);
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
  header: null,
};

export default compose(
  graphql(FACEBOOK_LOGIN_MUTATION, { name: 'facebookLogin' }),
  graphql(UPDATE_USER_MUTATION, { name: 'updateUserMutation' })
)(LoginScreen);

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
