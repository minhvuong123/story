export const CHANGE_PLAY = 'CHANGE_PLAY';
export const DURATION_AUDIO = 'DURATION_AUDIO';
export const CURRENT_TIME_AUDIO = 'CURRENT_TIME_AUDIO';


export const changePlay = () => {
  return {
    type: CHANGE_PLAY
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