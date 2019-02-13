import React from "react";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: "",
      confirmedPasswordValue: ""
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onConfirmedPasswordChange = this.onConfirmedPasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  onEmailChange(e) {
    this.setState({
      emailValue: e.target.value
    });
  }

  onConfirmedPasswordChange(password) {
    this.setState({
      confirmedPasswordValue: password
    });
  }

  handleLogin() {
    this.props.onLogin({
      email: this.state.emailValue,
      password: this.state.confirmedPasswordValue
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <EmailInput
          emailValue={this.state.emailValue}
          onEmailChange={this.onEmailChange}
        />
        <br />
        <PasswordInput
          showConfirm={false}
          onConfirmedPasswordChange={this.onConfirmedPasswordChange}
        />
        <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
