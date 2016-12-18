import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    const styles = require('./Message.scss');
    return (
      <div className={styles.message}>
        <p data-content="FREE SHIPPING on all orders, no code required.  Excludes orders shipped outside of the contiguous U.S., P.O. Boxes, and APO/FPO addresses.">FREE SHIPPING on all Orders within the U.S.A!</p>
      </div>
    );
  }
}
