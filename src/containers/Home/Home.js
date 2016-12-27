import React, { Component } from 'react';
import { Instagram, Jumbotron } from 'components';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    return (
        <Grid className="container">
          <div className={styles.home}>
          <Helmet title="Home"/>

          <Jumbotron />

          <div className={styles.mainContent}>
            <div className="container">
              <h2> Main Page Content goes here </h2>
            </div>
          </div>

          <Instagram />

        </div>
      </Grid>
    );
  }
}
