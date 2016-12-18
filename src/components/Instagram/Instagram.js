import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {load} from 'redux/modules/instagram';

@connect(
    state => ({info: state.info.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Instagram extends Component {
  static propTypes = {
    info: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  render() {
    const instagramIcon = require('./instagram.png');
    const styles = require('./Instagram.scss');
    const {info} = this.props; // eslint-disable-line no-shadow
    const instagramData = info.data;
    const instagramImgs = instagramData.map((post) => {
      const id = post.id;
      const urlLinks = post.link;
      const imgUrl = post.images.standard_resolution.url;
      return (
        <div key={id} className="col-xs-4 col-sm-3">
          <a href={urlLinks} target="_blank"><img src={imgUrl} alt=""/></a>
        </div>
      );
    });
    return (
      <div className={styles.instagram}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h3 className={styles.header} align="center"><a href="https://www.instagram.com/allthingsfrenchie_shop/"><img src={instagramIcon} alt=""/><span>Follow us on Instagram</span></a></h3>
            </div>
            <div className="col-md-3"></div>
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
