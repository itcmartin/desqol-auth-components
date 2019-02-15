import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Emo1 from "./images/PineAppleEmotions-01.png";
import Emo2 from "./images/PineAppleEmotions-02.png";
import Emo3 from "./images/PineAppleEmotions-03.png";
import Emo4 from "./images/PineAppleEmotions-04.png";
import Emo5 from "./images/PineAppleEmotions-05.png";
import Emo6 from "./images/PineAppleEmotions-06.png";
import Emo7 from "./images/PineAppleEmotions-07.png";

class Pineapple extends React.Component {
  constructor(props) {
    super(props);
	
	this.getEmotion = this.getEmotion.bind(this);
  }
  
  getEmotion()
  {
	  switch (this.props.emotion)
	  {
		  case "01": return Emo1;
		  case "02": return Emo2;
		  case "03": return Emo3;
		  case "04": return Emo4;
		  case "05": return Emo5;
		  case "06": return Emo6;
		  case "07": return Emo7;
	  }
  }

  render() {
	return <img src={this.getEmotion()} width="100" height="100" />
  }
}

Pineapple.propTypes = {
  emotion: PropTypes.string.isRequired,
};


Pineapple.defaultProps = {
  emotion: "01"
};

export default Pineapple;
