import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Toast extends Component {

  state = {
  }

  render() {
    return (
      <div className="container">
        <h1>Vintage's Toast Content Goes Here!</h1>
        <Helmet title="Frenchie's Toast"/>

      </div>
    );
  }
}
