import React from "react";

import EmailInput from "./EmailInput";
import DisplayNameInput from "./DisplayNameInput";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    //this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   this.setState({
  //     emailValue: e.value
  //   });
  // }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <EmailInput />
        <br />
        <DisplayNameInput />
        <br />
        <button>Update</button>
      </div>
    );
  }
}

export default Profile;
