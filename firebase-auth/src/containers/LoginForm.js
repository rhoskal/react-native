import React, { Component } from 'react';
import { Text } from 'react-native';

import firebase from 'firebase';

import Button from '../components/Button';
import CardSection from '../components/CardSection';
import Card from '../layouts/Card';
import FormInput from '../components/FormInput';
import Spinner from '../components/Spinner';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', error: '', loading: false };
  }

  onButtonPress() {
    this.setState({ error: '', loading: true }, () =>
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        })
    );
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <FormInput
            placeholder="user@gmail.com"
            keyboardType='email-address'
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <FormInput
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          { this.state.error }
        </Text>

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};
