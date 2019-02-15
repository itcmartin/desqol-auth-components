import React from 'react';
import PropTypes from 'prop-types';
import Sound from "react-sound";
import soundfile from "./sounds/deskBell.mp3";

/*
This component can be used for notification. It imports a .mp3 file located in the SFX folder of this project.
The sound will automatically play for once when this component is loaded on the page.

 */


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