import { 
  GET_STORY,
  GET_STORIES,
  GET_CHAPTERS,
} from '../actions';

const initState = {
  stories: [],
  story: '',
  chapters: [],
}

const storyReducer = (state = initState, action) => {
  switch(action.type){
    case GET_STORY:
      return {...state, story: action.story}
    case GET_STORIES:
      return {...state, stories: action.stories}
    case GET_CHAPTERS:
        return {...state, chapters: action.chapters}
    default :
      return {...state}
  }
}

export default storyReducer;