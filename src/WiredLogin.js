import React from "react";
import PropTypes from "prop-types";

import Login from "./Login";

const API = "http://localhost:4000/api";

const FETCH_CONFIG = {
  mode: "cors",
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json"
  }
};

class WiredLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    //alert(JSON.stringify(e));

    fetch(
      API + "/login",
      Object.assign(FETCH_CONFIG, {
        method: "POST",
        body: JSON.stringify(e)
      })
    )
      .then(response => {
        if (response.status === 200) {
          response.json().then(this.props.successHandler);
        } else {
          response.json().then(this.props.failureHandler);
        }
      })
      .catch(error => {
        this.props.errorHandler(error);
      });
  }

  render() {
    return <Login onLogin={this.handleLogin} />;
  }
}

WiredLogin.propTypes = {
  successHandler: PropTypes.func.isRequired,
  failureHandler: PropTypes.func.isRequired,
  errorHandler: PropTypes.func.isRequired
};

WiredLogin.defaultProps = {
  errorHandler: e => {
    alert("This is the default handler:" + JSON.stringify(e));
  }
};

export default WiredLogin;
