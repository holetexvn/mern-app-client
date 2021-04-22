import { combineReducers } from 'redux';
import posts from './posts';
import modal from './modal';

export default combineReducers({
  posts,
  modal,
});
