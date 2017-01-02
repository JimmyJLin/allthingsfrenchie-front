import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

export default class Signup extends Component {

  state = {
  }

  render() {
    const styles = require('./Signup.scss');
    return (
      <div className={styles.signup}>
        <Helmet title="Signup"/>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <h1>Signup Page Content Goes Here!</h1>
          </Row>
        </Grid>
      </div>
    );
  }
}
