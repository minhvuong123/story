import { 
  CHANGE_PLAY, 
  DURATION_AUDIO, 
  CURRENT_TIME_AUDIO,
  VOLUME } from '../actions';

const initState = {
  play: false,
  duration: 0,
  currentTime: 0,
  volume: 0,
}

const playReducer = (state = initState, action) => {
  switch(action.type){
    case CHANGE_PLAY:
      console.log("abc");
      
      return {...state, play: !state.play}
    case DURATION_AUDIO:
      return {...state, duration: action.duration}
    case CURRENT_TIME_AUDIO:
      return {...state, currentTime: action.currentTime}
    case VOLUME:
      return {...state, volume: action.volume}
    default :
      return {...state}
  }
}

export default playReducer;