export const CHANGE_PLAY = 'CHANGE_PLAY';
export const DURATION_AUDIO = 'DURATION_AUDIO';
export const CURRENT_TIME_AUDIO = 'CURRENT_TIME_AUDIO';
export const VOLUME = 'VOLUME';
export const CHANGE_AUDIO = 'CHANGE_AUDIO';
export const GET_PLAY_REF = 'GET_PLAY_REF';

export const getPlayRef = (playRef) => {
  return {
    type: GET_PLAY_REF,
    playRef
  }
}

export const changeAudio = (audio) => {
  return {
    type: CHANGE_AUDIO,
    audio
  }
}

export const changePlay = (status) => {
  return {
    type: CHANGE_PLAY,
    status
  }
}

export const durationAudio = (duration) => {
  return {
    type: DURATION_AUDIO,
    duration
  }
}

export const currentTimeAudio = (currentTime) => {
  return {
    type: CURRENT_TIME_AUDIO,
    currentTime
  }
}

export const getVolume = (volume) => {
  return {
    type: VOLUME,
    volume
  }
}