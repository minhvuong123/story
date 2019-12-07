import { 
  GET_PLAY_REF,
  CHANGE_AUDIO,
  CHANGE_PLAY, 
  DURATION_AUDIO, 
  CURRENT_TIME_AUDIO,
  VOLUME } from '../actions';

const initState = {
  playRef: '',
  play: false,
  duration: 0,
  currentTime: 0,
  volume: 0,
  audio: '',
}

const playReducer = (state = initState, action) => {
  switch(action.type){
    case GET_PLAY_REF:
      return {...state, playRef: action.playRef}
    case CHANGE_AUDIO:
      return {...state, audio: action.audio, play: false}
    case CHANGE_PLAY:
      return {...state, play: action.status}
    case DURATION_AUDIO:
      return {...state, duration: action.duration}
    case CURRENT_TIME_AUDIO:
      if(action.currentTime === state.duration){
        state.play = false;
      }
      return {...state, currentTime: action.currentTime}
    case VOLUME:
      return {...state, volume: action.volume}
    default :
      return {...state}
  }
}

export default playReducer;