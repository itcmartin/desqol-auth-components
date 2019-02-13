import React from 'react';
import PropTypes from 'prop-types';

import Registration from './Registration';

const API = 'http://localhost:4000/api';

const FETCH_CONFIG = {
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  }
};

class WiredRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onRegister = this.onRegister.bind(this);
  }

  onRegister(e) {
    fetch(
      API + '/registration',
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
    return <Registration onRegister={this.onRegister} />;
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

export default WiredRegistration;
