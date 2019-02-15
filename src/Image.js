import React from 'react';
import PropTypes from 'prop-types';
import photo from './images/gf.png'; // with import

class Image extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                <h1>Image</h1>
                <img src={photo}></img>
            </div>
        );
    }
}



export default Image;
