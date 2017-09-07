import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { Colors } from '../constants';
import { HomeScreen, SettingsScreen } from '../screens';

export default TabNavigator(
  {
    Messages: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Messages':
            iconName = Platform.OS === 'ios'
              ? `ios-chatboxes${focused ? '' : '-outline'}`
              : 'md-chatboxes';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-settings${focused ? '' : '-outline'}`
              : 'md-settings';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
