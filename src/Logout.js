import React from 'react';
import PropTypes from 'prop-types';

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    this.props.onLogout({});
  }

  render() {
    return (
      <div>
        <button onClick={this.onLogout}>Logout</button>
      </div>
    );
  }
}

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired
};

Logout.defaultProps = {
};

export default Logout;
