import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    const styles = require('./Footer.scss');
    return (
      <div className={styles.footer}>
        <h3>Footer goes here</h3>
      </div>
    );
  }
}
