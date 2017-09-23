import React from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeScreen, LoginScreen } from '../screens';

const RootStackNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
