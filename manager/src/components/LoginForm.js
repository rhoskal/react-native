import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, loginUser, passwordChanged } from '../actions';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import FormInput from './FormInput';
import Spinner from './Spinner';

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  showButtonOrSpinner() {
    if (this.props.loading) {
      return <Spinner size='large' />;
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
            label='Email:'
            placeholder='test@gmail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <FormInput
            label='Password:'
            placeholder='password'
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.error}>
          { this.props.error }
        </Text>

        <CardSection>
          { this.showButtonOrSpinner() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  loginUser,
  passwordChanged
})(LoginForm);
