import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form } from '../components';
import * as gamesActionCreators from '../action/games';
import * as filestackActionCreators from '../action/filestack';

class AddGameContainer extends Component {
  constructor (props){
    super(props);

    this.submit = this.submit.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
  }

  submit(event){
    event.preventDefault();

    this.props.gamesActions.postGame();
    hashHistory.push('/games');
  }

  uploadPicture() {
    this.props.filestackActions.uploadPicture();
  }


  render(){
    const { picture } = this.props;
    return <Form handleSubmit={this.submit} picture={picture} uploadPicture={this.uploadPicture} />
  }
}

function mapStateToProps (state) {
  return {
    picture: state.getIn(['filestack', 'ulr'], '')
  };
}

function mapDispatchToProps(dispatch){
  return {
    gamesActions: bindActionCreators(gamesActionCreators, dispatch),
    filestackActions: bindActionCreators(filestackActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGameContainer);
