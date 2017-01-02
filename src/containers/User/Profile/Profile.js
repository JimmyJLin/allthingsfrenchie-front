import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

export default class Profile extends Component {

  state = {
  }

  render() {
    const styles = require('./Profile.scss');
    return (
      <div className={styles.profile}>
        <Helmet title="Profile"/>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <h1>Profile Page Content Goes Here!</h1>
          </Row>
        </Grid>
      </div>
    );
  }
}
