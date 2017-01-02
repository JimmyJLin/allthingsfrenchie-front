import React, {Component} from 'react';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

export default class ShoppingCart extends Component {

  state = {
  }

  render() {
    const styles = require('./ShoppingCart.scss');
    return (
      <div className={styles.shoppingcart}>
        <Helmet title="ShoppingCart"/>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <h1>ShoppingCart Page Content Goes Here!</h1>
          </Row>
        </Grid>
      </div>
    );
  }
}
