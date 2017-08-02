import React, { Component } from 'react';
import { connect } from 'react-redux';

import { emailChanged } from '../actions';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import FormInput from './FormInput';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
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
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email
  };
};

export default connect(mapStateToProps, { emailChanged })(LoginForm);
