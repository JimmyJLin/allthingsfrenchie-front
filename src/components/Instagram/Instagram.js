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
    const {info} = this.props; // eslint-disable-line no-shadow
    const instagramData = info.data;
    const instagramImgs = instagramData.map((post) => {
      const url = post.images.standard_resolution.url;
      return (
        <div key={url} className="col-xs-4 col-sm-3">
          <img src={url} alt=""/>
        </div>
      );
    });
    const styles = require('./Instagram.scss');
    return (
      <div className={styles.instagram}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <h3 className={styles.header} align="center"><a href="https://www.instagram.com/allthingsfrenchie_shop/"><span>Follow us on Instagram</span></a></h3>
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
