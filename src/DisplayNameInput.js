import React from "react";

class DisplayNameInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onDisplayNameChange(e);
  }

  render() {
    return (
      <div>
        Display Name: &nbsp;
        <input
          type="text"
          placeholder="Your real name"
          value={this.props.displayNameValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default DisplayNameInput;
