import React from 'react';
import PropTypes from 'prop-types';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import DisplayNameInput from './DisplayNameInput';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      displayNameValue: '',
      passwordValue: ''
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onDisplayNameChange = this.onDisplayNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
  }

  onEmailChange(value) {
    this.setState({
      emailValue: value
    });
  }

  onDisplayNameChange(value) {
    this.setState({
      displayNameValue: value
    });
  }

  onPasswordChange(password) {
    this.setState({
      passwordValue: password
    });
  }

  onRegister() {
    const {emailValue, passwordValue, displayNameValue} = this.state;
    this.props.onRegister({
      email: emailValue,
      password: passwordValue,
      displayName: displayNameValue
    });
  }

  render() {
    const { emailValue, displayNameValue } = this.state;
    return (
      <div>
        <h2>Registration</h2>
        <EmailInput
          value={emailValue}
          onChange={this.onEmailChange}
        />
        <br />
        <PasswordInput
          showConfirm={true}
          onChange={this.onPasswordChange}
        />
        <br />
        <DisplayNameInput
          value={displayNameValue}
          onChange={this.onDisplayNameChange}
        />
        <br />
        <button onClick={this.onRegister}>Register</button>
      </div>
    );
  }
}

export default Registration;
