import { 
  GET_STORY,
  GET_STORIES,
  GET_CHAPTERS,
  GET_CHAPTERS_NEW,
  GET_CATEGORIES,
  GET_STORY_CATEGORIES,
} from '../actions';

const initState = {
  stories: [],
  story: '',
  chapters: [],
  chapterNews: [],
  categories: [],
  storyCategories: [],
}

const storyReducer = (state = initState, action) => {
  switch(action.type){
    case GET_STORY_CATEGORIES:
      return {...state, storyCategories: action.stories}
    case GET_CATEGORIES: 
      return {...state, categories: action.categories}
    case GET_STORY:
      return {...state, story: action.story}
    case GET_STORIES:
      return {...state, stories: action.stories}
    case GET_CHAPTERS:
      return {...state, chapters: action.chapters}
    case GET_CHAPTERS_NEW:
      return {...state, chapterNews: action.chapters}
    default :
      return {...state}
  }
}

export default storyReducer;