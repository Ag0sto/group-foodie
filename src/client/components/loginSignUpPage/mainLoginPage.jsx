import React, {useState} from 'react';
import { Button, Icon, Form } from 'react-bulma-components';

export default function MainLoginPage () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //
  }

  return (
    <div className="login-signup-page-container">
      <h2>Group Foodie</h2>
      <Form.Field className="login-form">
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input type="text" placeholder="Email"/>
          <Icon align="left" size="small">
            <i className="fas fa-envelope"/>
          </Icon>
        </Form.Control>
        <Form.Label>Password</Form.Label>
        <Form.Control>
          <Form.Input type="text" placeholder="Password"/>
          <Icon align="left" size="medium">
            <i className="fas fa-key"/>
          </Icon>
        </Form.Control>
      </Form.Field>
      <div className='login-buttons'>
        <Button align="center">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  )
};