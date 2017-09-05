import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import { AddBookScreen, BooksScreen } from '../screens';
import { Colors, Images } from '../constants';

const RouteConfig = {
  Books: {
    screen: BooksScreen,
    navigationOptions: {
      tabBarLabel: 'Books',
      tabBarIcon: props => (
        <Image
          source={Images.booksIcon}
          style={{ width: 26, height: 26, tintColor: props.tintColor }}
        />
      ),
    },
  },
  AddBook: {
    screen: AddBookScreen,
    navigationOptions: {
      tabBarIcon: props => (
        <Image
          source={Images.addIcon}
          style={{ width: 26, height: 26, tintColor: props.tintColor }}
        />
      ),
    },
  },
};

const TabConfig = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: Colors.red,
  },
};

export default TabNavigator(RouteConfig, TabConfig);
