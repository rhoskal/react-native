import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { graphql } from 'react-apollo';

import { Button, GreenGradient, UserInput } from '../components';
import { Images, Layout } from '../constants';

const defaultState = {
  email: '',
  password: '',
};

class LandingScreen extends React.Component {
  state = defaultState;

  _goto = routeName => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    });
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <GreenGradient style={styles.screenContainer}>
        <View style={styles.logoContainer}>
          <Image source={Images.logo} style={styles.welcomeImage} />
        </View>
        <View style={styles.inputForm}>
          <UserInput title="Email" onChangeText={text => this.setState({ email: text })} />
          <UserInput
            title="Password"
            secureTextEntry
            onChangeText={text => this.setState({ password: text })}
          />
          <Button title="Login" onPress={() => console.log(this.state)} />
        </View>
      </GreenGradient>
    );
  }
}

LandingScreen.navigationOptions = {
  header: null,
};

export default LandingScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inputForm: {
    flex: 1,
    width: Layout.window.width * 0.8,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
});
