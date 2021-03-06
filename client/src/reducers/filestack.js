import Immutable from 'immutable';

import { UPLOAD_PICTURE_SUCCESS, UPLOAD_PICTURE_FAILTURE } from '../constants/filestack';
import { POST_GAME_SUCCESS, POST_GAME_FAILTURE } from '../constants/games';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch(action.type){
    case UPLOAD_PICTURE_SUCCESS:
      return state.merge({url: action.url });

    case POST_GAME_SUCCESS:
    case POST_GAME_FAILTURE:
    case UPLOAD_PICTURE_FAILTURE:
      return state.clear();

    default:
      return state;
  }
}
