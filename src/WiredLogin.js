import React from 'react';
import PropTypes from 'prop-types';

import Login from './Login';

const API = 'http://localhost:4000/api';

const FETCH_CONFIG = {
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  }
};

class WiredLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin(e) {
    fetch(
      API + '/login',
      Object.assign(FETCH_CONFIG, {
        method: 'POST',
        body: JSON.stringify(e)
      })
    )
    .then(response => {
      if (response.status === 200) {
        response.json().then(this.props.onSuccess);
      } else {
        response.json().then(this.props.onFailure);
      }
    })
    .catch(error => {
      this.props.onError(error);
    });
  }

  render() {
    return <Login onLogin={this.onLogin} />;
  }
}

WiredLogin.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

WiredLogin.defaultProps = {
  onError: e => {
    alert('An error occurred:' + JSON.stringify(e));
  }
};

export default WiredLogin;
