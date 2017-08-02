import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import LoginForm from './src/components/Card';

import reducers from './src/reducers';

class App extends Component {
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
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
