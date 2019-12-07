import { combineReducers } from 'redux';
import PlayReducer from './PlayReducer';
import StoryReducer from './StoryReducer';

const RootReducer = combineReducers({
  playReducer: PlayReducer,
  storyReducer: StoryReducer
})

export default RootReducer;