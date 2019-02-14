import React from 'react';
import PropTypes from 'prop-types';
import Sound from "react-sound";
import soundfile from "./SFX/deskBell.mp3";




class BellSFX extends React.Component {
    render() {
        return (
            <Sound
                url={soundfile}
                playStatus={Sound.status.PLAYING}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            />
        );
    }
}

export default BellSFX;