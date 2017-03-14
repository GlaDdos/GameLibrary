import React, { PureComponent } from 'react';

export default class About extends PureComponent {
  render(){
    return(
      <div className="inner cover">
        <h1 className="cover-heading">About page. </h1>
        <p className="lead">Made with Node.js and React</p>
      </div>
    );
  }
}
