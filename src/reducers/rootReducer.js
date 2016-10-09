import { combineReducers } from 'redux-immutable';
import ui from './uiReducers';
import todo from './todoReducers';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
