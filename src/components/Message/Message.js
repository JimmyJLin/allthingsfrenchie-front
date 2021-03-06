import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
export default class Footer extends Component {

  render() {
    const styles = require('./Message.scss');
    return (
      <div className={styles.message}>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <Col xs={18} sm={24} md={12}>
              <p data-content="FREE SHIPPING on all orders, no code required.  Excludes orders shipped outside of the contiguous U.S., P.O. Boxes, and APO/FPO addresses.">FREE SHIPPING on all Orders within the U.S.A!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
