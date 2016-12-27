import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {load} from 'redux/modules/instagram';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

@connect(
    state => ({instagram: state.instagram.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Instagram extends Component {
  static propTypes = {
    instagram: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  render() {
    const instagramIcon = require('./instagram.png');
    const atfcommunity = require('./atfcommunity.png');
    const styles = require('./Instagram.scss');
    const {instagram} = this.props; // eslint-disable-line no-shadow
    const instagramData = instagram.data;
    let instagramImgs;
    if (instagramData === null || instagramData.length === 0 || typeof instagramData === 'undefined') {
      instagramImgs = <h3>No Image loaded</h3>;
    } else {
      instagramImgs = instagramData.map((post) => {
        const id = post.id;
        const urlLinks = post.link;
        const imgUrl = post.images.standard_resolution.url;
        return (
          <div key={id} className={styles.instagramContainer}>
            <Col xs={18} sm={6} md={3}>
              <a href={urlLinks} target="_blank">
                <img src={imgUrl} alt=""/>
              </a>
            </Col>
          </div>
        );
      });
    }
    return (
      <div className={styles.instagram}>
        <Helmet title="atfcommunity"/>
        <Grid className="container-fluid">
          <div className={styles.header}>
            <Row className="show-grid">
              <Col xs={17} md={6} xsOffset={1} mdOffset={3}>
                <img src={atfcommunity} alt=""/>
                <br/>
                <p>All Things Frenchie Shop Handpicked items inspired by our French Bulldogs & their Furrriends. Dog friendly & human friendly!</p>
              </Col>
            </Row>
            <br/>
            <Row className="show-grid">
              <Col xs={10} sm={10} md={8} xsOffset={1} mdOffset={3}>
                <h3 className={styles.followUS} align="center">
                  <a href="https://www.instagram.com/allthingsfrenchie_shop/">
                    <img src={instagramIcon} alt=""/>
                    <span>Follow us on Instagram</span>
                  </a>
                </h3>
              </Col>
            </Row>
          </div>
          <br/>
          <Row className="show-grid">
            <Grid className="container-fluid">
              <Row className="show-grid">
                {instagramImgs}
              </Row>
            </Grid>
          </Row>
        </Grid>
      </div>
    );
  }
}
