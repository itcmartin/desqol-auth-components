import React from 'react';
import PropTypes from 'prop-types';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        Email: &nbsp;
        <input
          type='text'
          placeholder='Your email address'
          value={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

EmailInput.defaultProps = {
  value: ''
};

export default EmailInput;
