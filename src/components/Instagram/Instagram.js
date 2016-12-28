import React, {Component} from 'react';
import { IndexLink } from 'react-router';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Instagram extends Component {

  render() {
    const styles = require('./Instagram.scss');
    const instagramTop = require('./images/instagram-top.png');
    const instagramPic = require('./images/instagram.jpg');
    return (
      <div className={styles.instagram}>
        <IndexLink to="/atfcommunity" >
          <div className={styles.imgBlock}>
            <Grid className="container">
              <Row className="show-grid">
                <Col xs={16} sm={11} md={11}>
                  <img src={instagramTop} alt="instagram-top"/>
                </Col>
              </Row>
              <Row className="show-grid">
                <Col xs={16} sm={11} md={11}>
                  <img src={instagramPic} alt="instagram-collage"/>
                </Col>
              </Row>
            </Grid>
          </div>
        </IndexLink>
      </div>
    );
  }
}
