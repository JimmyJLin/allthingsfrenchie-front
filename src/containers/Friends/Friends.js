import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Friends extends Component {

  state = {
  }

  render() {
    return (
      <div className="container">
        <h1>Friend's Closet</h1>
        <Helmet title="Friend's Closet"/>

      </div>
    );
  }
}
