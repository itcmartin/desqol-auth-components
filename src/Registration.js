import React from "react";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import DisplayNameInput from "./DisplayNameInput";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: "",
      displayNameValue: "",
      confirmedPasswordValue: ""
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onDisplayNameChange = this.onDisplayNameChange.bind(this);
    this.onConfirmedPasswordChange = this.onConfirmedPasswordChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  onEmailChange(e) {
    this.setState({
      emailValue: e.target.value
    });
  }

  onDisplayNameChange(e) {
    this.setState({
      displayNameValue: e.target.value
    });
  }

  onConfirmedPasswordChange(password) {
    this.setState({
      confirmedPasswordValue: password
    });
  }

  handleRegister() {
    this.props.onRegister({
      email: this.state.emailValue,
      password: this.state.confirmedPasswordValue,
      displayName: this.state.displayNameValue
    });
  }

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <EmailInput
          emailValue={this.state.emailValue}
          onEmailChange={this.onEmailChange}
          styles={{
            inputField: { width: "150px" }
          }}
        />
        <br />
        <PasswordInput
          showConfirm={true}
          onConfirmedPasswordChange={this.onConfirmedPasswordChange}
        />
        <br />
        <DisplayNameInput
          displayNameValue={this.state.displayNameValue}
          onDisplayNameChange={this.onDisplayNameChange}
        />
        <br />
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default Registration;
