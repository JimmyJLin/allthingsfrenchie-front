import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Jumbotron extends Component {

  render() {
    const styles = require('./Jumbotron.scss');
    return (
      <div className={styles.jumbotron}>
        <Grid className="container">
          <div className={styles.headerContent}>
            <h2> Main Page Header Content goes here </h2>
          </div>
        </Grid>
      </div>
    );
  }
}
