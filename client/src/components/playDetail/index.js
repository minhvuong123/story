import React, { Component } from 'react'
import moment from 'moment';

class PlayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusProgress: false,
      abc: 0,
    }
    this.refProgress = React.createRef();
  }
  

  componentDidMount(){
    this.refProgress.current.addEventListener('click', this.handleProgress);
  }

  handleProgress = (e) => {
    const { player, duration, currentTimeAudio } = this.props;
    const progress = (e.offsetX / this.refProgress.current.getBoundingClientRect().width) * duration;
    player.current.currentTime = progress;
    currentTimeAudio(progress);
  }

  startSetProgress = (e) => {
    this.setState({
      statusProgress: true
    })
    this.setProgress(e);
  }

  setProgress = (e) => {
    const { statusProgress } = this.state;
    const { player, duration, currentTimeAudio } = this.props;
    if(statusProgress){
      const progress = (e.nativeEvent.offsetX / this.refProgress.current.getBoundingClientRect().width) * duration;
      player.current.currentTime = progress;
      currentTimeAudio(progress);
    }
  }

  stopSetProgress = (e) => {
    this.setState({
      statusProgress: false
    })
    this.setProgress(e)
  }

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
            <div 
              className="song-player-time" 
              ref={this.refProgress}
              onMouseDown={this.startSetProgress}
              onMouseMove={this.setProgress}
              onMouseUp={this.stopSetProgress}
              onMouseLeave={this.stopSetProgress}
              >
              <div className="player-time-fill" style={{width: progressLength}} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayDetail;
