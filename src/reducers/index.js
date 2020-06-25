import { combineReducers } from 'redux';
import settings from './settings';
import spaces from './spaces';
import categories from './categories';
import tags from './tags';
import formats from './formats';
import media from './media';
import authors from './authors';
import posts from './posts';
import ratings from './ratings';
import claimants from './claimants';
import { SET_SELECTED_SPACE } from '../constants/spaces';

const appReducer = combineReducers({
  settings,
  spaces,
  categories,
  tags,
  formats,
  media,
  authors,
  posts,
  ratings,
  claimants,
});

const rootReducer = (state, action) => {
  if (action.type === SET_SELECTED_SPACE) {
    const { spaces, settings } = state;

    state = { spaces, settings };
  }
  return appReducer(state, action);
};

export default rootReducer;
