import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Frenchie extends Component {

  state = {
  }

  render() {
    return (
      <div className="container">
        <h1>Frenchie's Closet</h1>
        <Helmet title="Frenchie's Closet"/>

      </div>
    );
  }
}
