import React from "react";

const localStyles = {
  inputField: {}
};

class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onEmailChange(e);
  }

  render() {
    return (
      <div>
        Email: &nbsp;
        <input
          style={Object.assign(
            {},
            localStyles.inputField,
            this.props.styles.inputField
          )}
          type="text"
          placeholder="Your email address"
          value={this.props.emailValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

EmailInput.defaultProps = {
  styles: {}
};

export default EmailInput;
