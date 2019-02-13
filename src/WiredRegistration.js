import React from "react";

import Registration from "./Registration";

const API = "http://localhost:4000/api";

const FETCH_CONFIG = {
  mode: "cors",
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json"
  }
};

class WiredRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister(e) {
    //alert(JSON.stringify(e));

    fetch(
      API + "/registration",
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
    return <Registration onRegister={this.handleRegister} />;
  }
}

export default WiredRegistration;
