import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordValue: '',
      confirmValue: '',
      isTheSame: true
    };

    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirm = this.onChangeConfirm.bind(this);
    this.bubbleUpIfSame = this.bubbleUpIfSame.bind(this);
  }

  onChangePassword(e) {
    const value = e.target.value;
    this.setState(
      prevState => ({
        passwordValue: value,
        isTheSame: value === prevState.confirmValue
      }),
      this.bubbleUpIfSame
    );
  }

  onChangeConfirm(e) {
    const value = e.target.value;
    this.setState(
      prevState => ({
        confirmValue: value,
        isTheSame: value === prevState.passwordValue
      }),
      this.bubbleUpIfSame
    );
  }

  bubbleUpIfSame() {
    const { isTheSame,  passwordValue} = this.state;
    if (isTheSame || !this.props.showConfirm) {
      this.props.onChange(passwordValue);
    } else {
      this.props.onChange('');
    }
  }

  render() {
    const { passwordValue, confirmValue, isTheSame } = this.state;
    return (
      <div>
        Password: &nbsp;
        <input
          type='password'
          value={passwordValue}
          onChange={this.onChangePassword}
        />
        <br />
        {this.props.showConfirm && (
          <Fragment>
            Confirm: &nbsp;
            <input
              type='password'
              value={confirmValue}
              onChange={this.onChangeConfirm}
            />
            <br />
            {isTheSame ? 'okay' : 'not okay'}
          </Fragment>
        )}
      </div>
    );
  }
}

export default PasswordInput;
