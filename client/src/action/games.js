import {
  DELETE_GAME,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILTURE,

  GET_GAMES,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILTURE,

  POST_GAME,
  POST_GAME_SUCCESS,
  POST_GAME_FAILTURE,

  SET_SEARCH_BAR,
  SHOW_SELECTED_GAME
} from '../constants/games';

function deleteGame(){
  return {
    type: DELETE_GAME
  }
}

function deleteGameSuccess(games) {
  return {
    type: DELETE_GAME_SUCCESS,
    games
  }
}

function deleteGameFailture(){
  return {
    type: DELETE_GAME_FAILTURE
  }
}

function getGames(){
  return {
    type: GET_GAMES
  };
}

function getGamesSuccess(games){
  return {
    type: GET_GAMES_SUCCESS,
    games
  };
}

function getGamesFailture(){
  return {
    type: GET_GAMES_FAILTURE
  };
}

function postGame(){
  return {
    type: POST_GAME
  };
}

function postGameSuccess(){
  return {
    type: POST_GAME_SUCCESS
  };
}

function postGameFailture(){
  return {
    type: POST_GAME_FAILTURE
  };
}

function setSearchBar(keyword){
  return {
    type: SET_SEARCH_BAR,
    keyword
  };
}

function showSelectedGame(game){
  return {
    type: SHOW_SELECTED_GAME,
    game
  }
}

export {
  getGames,
  getGamesSuccess,
  getGamesFailture,
  postGame,
  postGameSuccess,
  postGameFailture,
  setSearchBar,
  showSelectedGame
};
