import React from 'react';
import PropTypes from 'prop-types';

class DisplayNameInput extends React.Component {
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
        Display Name: &nbsp;
        <input
          type='text'
          placeholder='Your real name'
          value={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

DisplayNameInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

DisplayNameInput.defaultProps = {
  value: ''
};

export default DisplayNameInput;
