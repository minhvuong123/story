import React, { Component } from 'react'
import { connect } from 'react-redux'
import Play from '../../components/play'

// actions
import { changePlay, durationAudio, currentTimeAudio } from '../../redux/actions';

class PlayDashBoard extends Component {
  render() {
    const { play, duration, currentTime, changePlay, durationAudio, currentTimeAudio } = this.props;
    return (
      <Play 
        play={play} 
        duration={duration} 
        currentTime={currentTime}
        changePlay={changePlay} 
        durationAudio={durationAudio}
        currentTimeAudio={currentTimeAudio}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  play: state.playReducer.play,
  duration: state.playReducer.duration,
  currentTime: state.playReducer.currentTime
})

const mapDispatchToProps = (dispatch) => ({
  changePlay: () => dispatch(changePlay()),
  durationAudio: value => dispatch(durationAudio(value)),
  currentTimeAudio: value => dispatch(currentTimeAudio(value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayDashBoard);
