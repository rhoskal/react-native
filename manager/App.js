import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Router from './src/Router';

import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9Ld2pIl4Kddm1z0QdscXAVE57yXdXw7I',
      authDomain: 'manager-fb346.firebaseapp.com',
      databaseURL: 'https://manager-fb346.firebaseio.com',
      projectId: 'manager-fb346',
      storageBucket: 'manager-fb346.appspot.com',
      messagingSenderId: '1090277197116'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <Router sceneStyle={{ paddingTop: 65 }} />
        </View>
      </Provider>
    );
  }
}
