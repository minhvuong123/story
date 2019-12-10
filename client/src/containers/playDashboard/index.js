import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Play from '../../components/play'

// actions
import { 
  getPlayRef,
  changePlay, 
  durationAudio, 
  currentTimeAudio,
  changeAudio,
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

    document.getElementById('player').addEventListener('ended', () => {
      // console.log("end", chapters[1]);
      
      // changeAudio(chapters[1]);
    }, false);
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
      currentTimeAudio,
      chapters,
    } = this.props;
    // console.log(chapters);
    
    return (
      <Fragment>
        <audio id="player" ref={this.refAudio} src={`${audio ? apiShare+'/'+ audio : ''} `} type="audio/mp3" />
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
  chapters: state.storyReducer.chapters,
})

const mapDispatchToProps = (dispatch) => ({
  getPlayRef: playRef => dispatch(getPlayRef(playRef)),
  changePlay: status => dispatch(changePlay(status)),
  durationAudio: value => dispatch(durationAudio(value)),
  currentTimeAudio: value => dispatch(currentTimeAudio(value)),
  getVolume: value => dispatch(getVolume(value)),
  changeAudio: audio => dispatch(changeAudio(audio)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayDashBoard);
