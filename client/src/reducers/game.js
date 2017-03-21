import Immutable from 'immutable';

import {
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILTURE,

  GET_GAMES_SUCCESS,
  GET_GAMES_FAILTURE,

  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME
} from '../constants/games';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type){
    case GET_GAMES_SUCCESS:
    case DELETE_GAME_SUCCESS:
      return state.merge({ list: action.games });

    case GET_GAMES_FAILTURE:
    case DELETE_GAME_FAILTURE:
      return state.clear();

    case SET_SEARCH_BAR:
      return state.merge( {searchBar: action.keyword });

    case SHOW_SELECTED_GAME:
      return state.merge( { selectedGame: action.game });

    default:
      return state;
  }
}
