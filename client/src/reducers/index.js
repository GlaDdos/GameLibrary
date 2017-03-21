import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import games from './game';
import filestack from './filestack';

export default combineReducers({
  games,
  filestack,
  form
});
