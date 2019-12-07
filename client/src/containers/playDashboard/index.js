import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Play from '../../components/play'

// actions
import { 
  getPlayRef,
  changeAudio,
  changePlay, 
  durationAudio, 
  currentTimeAudio,
  getVolume } from '../../redux/actions';

import { apiShare } from '../../constants';

class PlayDashBoard extends Component {
  constructor(props) {
    super(props);
    this.refAudio =  React.createRef();
  }

  componentDidMount(){
    const { getPlayRef, durationAudio, currentTimeAudio } = this.props;

    this.refAudio.current.onloadedmetadata = () => {
      const value = this.refAudio.current.duration;
      durationAudio(value);
    };

    this.refAudio.current.addEventListener('timeupdate', (event) => {
      const currentTime = this.refAudio.current.currentTime;
      currentTimeAudio(currentTime);
    });

    getPlayRef(this.refAudio.current);
  }

  playAudio = () => {
    const { play, changePlay } = this.props;
    if(!play){
      this.refAudio.current.play(); 
      changePlay(true);
    } else {
      this.refAudio.current.pause();
      changePlay(false);
    }
    
  }
  
  render() {
    const { 
      audio,
      play, 
      volume, 
      getVolume, 
      duration, 
      currentTime, 
      durationAudio, 
      currentTimeAudio 
    } = this.props;
    return (
      <Fragment>
        <audio id="player" ref={this.refAudio} src={`${apiShare}/${audio}`} type="audio/mp3" />
        {/* <audio id="player" ref={this.refAudio} src="http://localhost:3001/public/uploads/audios/Linh-vu-thien-ha-1.mp3" type="audio/mp3" /> */}
        <Play 
          player={this.refAudio}
          play={play} 
          duration={duration} 
          currentTime={currentTime}
          changePlay={changePlay}
          playAudio={this.playAudio} 
          durationAudio={durationAudio}
          currentTimeAudio={currentTimeAudio}
          volume={volume}
          getVolume={getVolume}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  audio: state.playReducer.audio,
  play: state.playReducer.play,
  duration: state.playReducer.duration,
  currentTime: state.playReducer.currentTime,
  volume: state.playReducer.volume,
})

const mapDispatchToProps = (dispatch) => ({
  getPlayRef: playRef => dispatch(getPlayRef(playRef)),
  changePlay: status => dispatch(changePlay(status)),
  durationAudio: value => dispatch(durationAudio(value)),
  currentTimeAudio: value => dispatch(currentTimeAudio(value)),
  getVolume: value => dispatch(getVolume(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayDashBoard);
