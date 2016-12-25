import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {load} from 'redux/modules/instagram';

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
          <div key={id} className="col-xs-4 col-sm-3">
            <a href={urlLinks} target="_blank"><img src={imgUrl} alt=""/></a>
          </div>
        );
      });
    }
    return (
      <div className={styles.instagram}>
        <Helmet title="atfcommunity"/>
        <div className="container-fluid">
          <div className={styles.header}>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <img src={atfcommunity} alt=""/>
                <br/>
                <p>All Things Frenchie Shop Handpicked items inspired by our French Bulldogs & their Furrriends. Dog friendly & human friendly!</p>
              </div>
              <div className="col-md-3"></div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <h3 className={styles.followUS} align="center"><a href="https://www.instagram.com/allthingsfrenchie_shop/"><img src={instagramIcon} alt=""/><span>Follow us on Instagram</span></a></h3>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          <br/>
          <div className={styles.instagramContainer}>
            <div className="row">
              {instagramImgs}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
