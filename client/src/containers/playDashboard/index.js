import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Play from '../../components/play'

// actions
import { 
  changePlay, 
  durationAudio, 
  currentTimeAudio,
  getVolume } from '../../redux/actions';

class PlayDashBoard extends Component {
  constructor(props) {
    super(props);
    this.refAudio =  React.createRef();
  }

  componentDidMount(){
    const { durationAudio, currentTimeAudio } = this.props;
    this.refAudio.current.onloadedmetadata = () => {
      const value = this.refAudio.current.duration;
      durationAudio(value);
    };

    this.refAudio.current.addEventListener('timeupdate', (event) => {
      const currentTime = this.refAudio.current.currentTime;
      currentTimeAudio(currentTime);
    });
  }

  playAudio = () => {
    const { play, changePlay } = this.props;
    const Play = !play; // handle in this component
    if(Play){
      this.refAudio.current.play(); 
    } else {
      this.refAudio.current.pause();
    }
    changePlay();
  }
  
  render() {
    const { 
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
        {/* <audio id="player" ref={this.refAudio} src="https://ia803002.us.archive.org/21/items/DauLaDaiLuc2TH/40_Ch%C6%B0%C6%A1ng%201141-1160%20Dau%20La%20Dai%20Luc%202.mp3" type="audio/mp3" /> */}
        <audio id="player" ref={this.refAudio} src="https://mp3-320s1-zmp3.zadn.vn/557c9c9006d4ef8ab6c5/4824203005250266339?authen=exp=1574695124~acl=/557c9c9006d4ef8ab6c5/*~hmac=e49fb2a7fc1245bd169be2dd12bbffc1" type="audio/mp3" />
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
  play: state.playReducer.play,
  duration: state.playReducer.duration,
  currentTime: state.playReducer.currentTime,
  volume: state.playReducer.volume,
})

const mapDispatchToProps = (dispatch) => ({
  changePlay: () => dispatch(changePlay()),
  durationAudio: value => dispatch(durationAudio(value)),
  currentTimeAudio: value => dispatch(currentTimeAudio(value)),
  getVolume: value => dispatch(getVolume(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayDashBoard);
