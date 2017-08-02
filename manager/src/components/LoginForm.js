import React, { Component } from 'react';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';
import FormInput from './FormInput';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <FormInput label='Email' placeholder='test@gmail.com' />
        </CardSection>

        <CardSection>
          <FormInput label='Password' placeholder='password' secureTextEntry />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
