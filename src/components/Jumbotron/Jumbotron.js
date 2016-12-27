import React, {Component} from 'react';
import { IndexLink } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Jumbotron extends Component {

  render() {
    const styles = require('./Jumbotron.scss');
    const mainImg = require('./images/jumbotron.jpeg');
    return (
      <div className={styles.jumbotron}>
        <Grid className="container">
          <div className={styles.headerContent}>
            <span> SHOP YOUR FAVORITE CLOSET</span>
          </div>
            <Row className="show-grid">
              <Col xs={17} md={12}>
                <div className={styles.imgBlock}>
                  <img src={mainImg} alt="jumbotron"/>
                </div>
                <div className={styles.menuOptions}>
                  <span>
                    <IndexLink to="/frenchie">SHOP FRENCHIE</IndexLink>
                  </span>
                  <span>
                    <IndexLink to="/friends">SHOP FRIENDS</IndexLink>
                  </span>
                  <span>
                    <IndexLink to="/toast">SHOP TOAST</IndexLink>
                  </span>
                </div>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
