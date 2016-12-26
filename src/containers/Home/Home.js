import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    const instagramTop = require('./instagram-top.png');
    const instagramPic = require('./instagram.jpg');
    // require the logo image both from client and server
    return (
        <Grid className="container">
          <div className={styles.home}>
          <Helmet title="Home"/>
          <div className={styles.headerContent}>
            <div className="container">
              <h2> Main Page Header Content goes here </h2>
            </div>
          </div>

          <div className={styles.mainContent}>
            <div className="container">
              <h2> Main Page Content goes here </h2>
            </div>
          </div>

          <IndexLink to="/atfcommunity" >
            <div className={styles.imgBlock}>
              <Grid className="container">
                <Row className="show-grid">
                  <Col xs={17} md={12}>
                    <img src={instagramTop} alt="instagram-top"/>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col xs={17} md={12}>
                    <img src={instagramPic} alt="instagram-collage"/>
                  </Col>
                </Row>
              </Grid>
            </div>
          </IndexLink>
        </div>
      </Grid>
    );
  }
}
