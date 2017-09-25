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

import { FACEBOOK_LOGIN_MUTATION, UPDATE_USER_MUTATION, CURRENT_USER_QUERY } from '../api/graphcool';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticating: false,
    };
  }

  _loginWithFacebookAsync = async () => {
    const APP_ID = '488637721496153';
    const OPTIONS = { permissions: ['public_profile'] };
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(APP_ID, OPTIONS);

    this.setState({ authenticating: true });

    switch (type) {
      case 'success': {
        await this.props
          .facebookLogin({
            variables: { facebookToken: token },
          })
          .then(({ data }) => {
            this._storeAuthTokensLocally(data.authenticateFacebookUser.token, token);
          })
          .catch(error => {
            console.error('facebookLogin error: ' + error);
          });

        await this.props.fetchCurrentUser
          .refetch()
          .then(userResult => {
            // await AsyncStorage.setItem('graphcoolUserId', userResult.data.user.id);
            this.setState({ authenticating: false });
          })
          .catch(error => {
            console.error('fetchCurrentUser error: ' + error);
          });
        this.props.navigation.navigate('Home');
        break;
      }
      case 'cancel': {
        Alert.alert('Cancelled!', 'Login was cancelled!');
        this.setState({ authenticating: false });
        break;
      }
      default: {
        Alert.alert('Error', 'Facebook login returned error.');
        this.setState({ authenticating: false });
      }
    }
  };

  _storeAuthTokensLocally = async (graphcoolToken, socialLoginToken) => {
    try {
      await AsyncStorage.setItem('graphcoolToken', graphcoolToken);
      await AsyncStorage.setItem('socialLoginToken', socialLoginToken);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  };

  render() {
    if (this.state.authenticating) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableHighlight style={styles.btn} onPress={this._loginWithFacebookAsync}>
            <Text style={styles.btnText}>Continue with Facebook</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
}

LoginScreen.navigationOptions = {
  header: null,
};

export default compose(
  graphql(FACEBOOK_LOGIN_MUTATION, { name: 'facebookLogin' }),
  graphql(UPDATE_USER_MUTATION, { name: 'updateUserMutation' }),
  graphql(CURRENT_USER_QUERY, { name: 'fetchCurrentUser', options: {fetchPolicy: 'network-only' } })
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
