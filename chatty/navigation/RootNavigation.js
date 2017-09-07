import React from 'react';
import { Notifications } from 'expo';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import { LandingScreen } from '../screens';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Landing: { screen: LandingScreen },
    Main: { screen: MainTabNavigator },
  },
  {
    initialRouteName: 'Landing',
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

  _registerForPushNotifications() {
    registerForPushNotificationsAsync();

    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
