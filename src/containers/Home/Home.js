import React, { Component } from 'react';
// import { Instagram } from 'components';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <h2> Main Page Header Content goes here </h2>
          </div>
        </div>

        <div className="container">
          <h2> Main Page Content goes here </h2>
        </div>

        {/* <Instagram /> */}
      </div>
    );
  }
}
