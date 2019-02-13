import React from 'react';
import PropTypes from 'prop-types';

import EmailInput from './EmailInput';
import DisplayNameInput from './DisplayNameInput';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onDisplayNameChange = this.onDisplayNameChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
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

  onUpdate() {
    const { emailValue, displayNameValue} = this.state;
    this.props.onUpdate({
      email: emailValue,
      displayName: displayNameValue
    });
  }

  render() {
    const { emailValue, displayNameValue } = this.state;
    return (
      <div>
        <h2>Profile</h2>
        <EmailInput
          value={emailValue}
          onChange={this.onEmailChange}
        />
        <br />
        <DisplayNameInput
          value={displayNameValue}
          onChange={this.onDisplayNameChange}
        />
        <br />
        <button onClick={this.onUpdate}>Update</button>
      </div>
    );
  }
}

Profile.propTypes = {
  onUpdate: PropTypes.func.isRequired
};

Profile.defaultProps = {
};

export default Profile;
