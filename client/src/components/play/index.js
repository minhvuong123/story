import React, { Component } from 'react'


import './play.css';
import PlayControl from '../playControl';
import PlayDetail from '../playDetail';
import PlayList from '../playList';

class Play extends Component {
  render() {
    const { play, player, duration, currentTime, playAudio, durationAudio, currentTimeAudio } = this.props;
    return (
      <div className="media-play">
        <div className="container pl-0 pr-0">
          <div className="row align-items-center">
            <PlayControl play={play} currentTime={currentTime} playAudio={playAudio} durationAudio={durationAudio} currentTimeAudio={currentTimeAudio}/>
            <PlayDetail player={player} duration={duration} currentTime={currentTime} currentTimeAudio = {currentTimeAudio}/>
            <PlayList />
          </div>
        </div>
      </div>
    )
  }
}

export default Play;
