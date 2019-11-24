import React, { Component } from 'react'
import { 
  IoIosVolumeHigh,
  IoIosVolumeLow,
  IoIosVolumeMute,
  IoIosVolumeOff,
  IoIosSettings,
} from "react-icons/io";
import moment from 'moment';

class PlayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusProgress: false,
      statusVolume: false,
      statusSpeed: false,
      volumeShow: false,
    }
    this.refProgress = React.createRef();
  }

  handleVolume = () => {
    const { volumeShow } = this.state;
    this.setState({
      volumeShow: !volumeShow,
      statusSpeed: false,
    })
  }

  handleSpeed = () => {
    const { statusSpeed } = this.state;
    this.setState({
      statusSpeed: !statusSpeed,
      volumeShow: false,
    })
  }

  handleChooseSpeed = (e) => {
    const { player } = this.props;
    const value = e.target.dataset.value;
    player.current.playbackRate = value;
    this.refSpeed.childNodes.forEach(element => {
      element.classList.remove('active');
    });
    e.target.classList.add('active');
  }

  // handle volume
  startSetVolume = (e) => {
    this.setState({
      statusVolume: true
    })
    this.setVolume(e)
  }

  setVolume = (e) => {
    const { statusVolume } = this.state;
    const { getVolume, player } = this.props;
    if(statusVolume){
      const progress = (e.nativeEvent.offsetY / this.refVolume.getBoundingClientRect().height) * 100;
      if(progress < 0){
        player.current.volume = 1;
        getVolume(0); 
      } else if(progress > 100){
        player.current.volume = 0;
        getVolume(100);
      } else {
        player.current.volume = parseFloat(100 - progress) / 100;
        getVolume(progress);
      }
    }
  }

  stopSetVolume = (e) => {
    this.setState({
      statusVolume: false
    })
    this.setVolume(e)
  }

  // handle progress bar
  startSetProgress = (e) => {
    this.setState({
      statusProgress: true
    })
    this.setProgress(e);
  }

  setProgress = (e) => {
    const { statusProgress } = this.state;
    const { player, duration, currentTimeAudio, changePlay } = this.props;
    if(statusProgress){
      const progress = (e.nativeEvent.offsetX / this.refProgress.current.getBoundingClientRect().width) * duration;
      player.current.currentTime = progress > duration ? duration : progress;
      if(progress && progress > 0){
        currentTimeAudio(progress);
      } 
      if(progress > duration) {
        currentTimeAudio(duration);
      } 
      if(progress < 0){
        currentTimeAudio(0);
      }
    }
  }

  stopSetProgress = (e) => {
    this.setState({
      statusProgress: false
    })
    this.setProgress(e)
  }

  render() {
    const { duration, currentTime, volume } = this.props;   
    const { volumeShow, statusSpeed } = this.state;
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
              onClick={this.setProgress}
              onMouseDown={this.startSetProgress}
              onMouseMove={this.setProgress}
              onMouseUp={this.stopSetProgress}
              onMouseLeave={this.stopSetProgress}>
              <div className="player-time-fill" style={{width: progressLength}} />
            </div>
          </div>
          <div className="song-feature">
            <div className="song-volume">
              <IoIosVolumeHigh onClick={this.handleVolume} />
              <div className={`song-volume-pop ${volumeShow ? 'active' : ''}`}>
                <div
                  className="volume-pop-wrap"
                  ref = {(ref) => {this.refVolume = ref}} 
                  onClick={this.setVolume}
                  onMouseDown={this.startSetVolume}
                  onMouseMove={this.setVolume}
                  onMouseUp={this.stopSetVolume}>
                  <div 
                    className="volume-pop-fill" 
                    style={{height: volume + '%'}}/>
                </div>
              </div>
            </div>
            <div className="song-speed">
              <IoIosSettings onClick={this.handleSpeed} />
              <div ref = {(ref) => {this.refSpeed = ref}} className={`song-speed-pop ${statusSpeed ? 'active' : ''}`}>
                <span data-value={0.5} onClick={this.handleChooseSpeed}>0.5x</span>
                <span data-value={1} onClick={this.handleChooseSpeed} className="active">1x</span>
                <span data-value={1.25} onClick={this.handleChooseSpeed}>1.25x</span>
                <span data-value={1.5} onClick={this.handleChooseSpeed}>1.5x</span>
                <span data-value={2} onClick={this.handleChooseSpeed}>2x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayDetail;
