import React from 'react';
import PropTypes from 'prop-types';

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      passwordValue: ''
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onEmailChange(value) {
    this.setState({
      emailValue: value
    });
  }

  onPasswordChange(password) {
    this.setState({
      passwordValue: password
    });
  }

  onLogin() {
    const { emailValue, passwordValue } = this.state;
    this.props.onLogin({
      email: emailValue,
      password: passwordValue
    });
  }

  render() {
    const { emailValue } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <EmailInput
          value={emailValue}
          onChange={this.onEmailChange}
        />
        <br />
        <PasswordInput
          showConfirm={false}
          onChange={this.onPasswordChange}
        />
        <br />
        <button onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

Login.defaultProps = {
};

export default Login;
