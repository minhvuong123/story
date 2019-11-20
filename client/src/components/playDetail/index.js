import React, { Component } from 'react'
import moment from 'moment';

class PlayDetail extends Component {
  render() {
    const { duration, currentTime } = this.props;    
    const parseCurrentTime = moment.utc(moment.duration(currentTime,"seconds").asMilliseconds()).format("HH:mm:ss");
    const parseDuration = moment.utc(moment.duration(duration,"seconds").asMilliseconds()).format("HH:mm:ss");
    const progressLength = currentTime / duration * 100 + '%';
    
    return (
      <div className="col-7 col-sm-6 pl-0 pr-0">
        <div className="media-play-detail">
          <div className="d-none d-sm-inline-block song-thumb">
            <a href="/">
              <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/6/e/1/d/6e1df68d8ce5d7b706234d80d34308e3.jpg" alt="" />
            </a>
          </div>
          <div className="song-wrap">
            <div className="song-info">
              <div className="d-none d-sm-inline-block song-info-name">Name</div>
              <div className="d-none d-sm-inline-block song-info-time">
                <span className="time-play">{parseCurrentTime}</span>
                <span> / </span>
                <span className="time-duration">{parseDuration}</span>
              </div>
            </div>
            <div className="song-player-time">
              <div className="player-time-fill" style={{width: progressLength}} />
              <div className="player-time-buffer" style={{left: progressLength}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayDetail;
