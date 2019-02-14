import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.style = {};
    this.style.progressBar = {
      backgroundColor: "#efefef",
      height: "15px",
      padding: "3px"
    }
  
    this.style.progress = {
      background: "#4286f4", /* Old browsers */
      background: "-moz-linear-gradient(top, #4286f4 50%, #377ff2 50%)", /* FF3.6-15 */
      background: "-webkit-linear-gradient(top, #4286f4 50%,#377ff2 50%)", /* Chrome10-25,Safari5.1-6 */
      background: "linear-gradient(to bottom, #4286f4 50%,#377ff2 50%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#4286f4', endColorstr='#377ff2',GradientType=0 )", /* IE6-9 */
      boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.65)",
      height: "100%",
      width: `${this.props.progress}%`
    }
  };

  render() {
    return (
      <div className="progressbar" style={this.style.progressBar}>
        <div className="progress" style={this.style.progress}></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
  progress: 0
};

export default ProgressBar;
