import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Profile extends Component {

  state = {
  }

  render() {
    return (
      <div className="container">
        <h1>Profile Page</h1>
        <Helmet title="Profile"/>

      </div>
    );
  }
}
