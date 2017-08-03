import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = (() =>
  <Router>
    <Scene key='auth'>
      <Scene key='login' component={LoginForm} title='Please Login' />
    </Scene>

  </Router>
);

export default RouterComponent;
