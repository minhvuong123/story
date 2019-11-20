import { combineReducers } from 'redux';
import PlayReducer from './PlayReducer';

const RootReducer = combineReducers({
  playReducer: PlayReducer,
})

export default RootReducer;