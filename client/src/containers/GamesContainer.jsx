import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';

import * as gamesActionCreators from '../action/games';
import { Modal, GameListManager } from '../components';

class GamesContainer extends Component {
  constructor (props) {
    super();

    this.toggleModal = this.toggleModal.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount(){
    this.getGames();
  }

  toggleModal(index){
    this.props.gamesActions.showSelectedGame(this.props.games[index]);
    $('#game-modal').modal();
  }

  getGames(){
    this.props.gamesActions.getGames();
  }

  deleteGame(id){
    this.props.gamesActions.deleteGame(id);
  }

  setSearchBar (event) {
    this.props.gamesActions.setSearchBar(event.target.value.toLowerCase());
  }

  render () {
    const { games, searchBar, selectedGame } = this.props;

    return (
      <div>
        <Modal game={selectedGame} />
        <GameListManager
          games={games}
          searchBar={searchBar}
          setSearchBar={this.setSearchBar}
          toggleModal={this.toggleModal}
          deleteGame={this.deleteGame}
        />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    games: state.getIn(['games', 'list'], Immutable.List()).toJS(),
    searchBar: state.getIn(['games', 'searchBar'], ''),
    selectedGame: state.getIn(['games', 'selectedGame'], Immutable.List()).toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return {
    gamesActions: bindActionCreators(gamesActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
