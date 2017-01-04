import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import {resetPassword} from 'redux/modules/auth';
import Helmet from 'react-helmet';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

@connect(
  state => ({user: state.auth.user}),
  {resetPassword, pushState: push})
export default class ResetPass extends Component {

  static propTypes = {
    user: PropTypes.object,
    resetPassword: PropTypes.func,
    pushState: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.refs.email;
    this.props.resetPassword(email.value);
    email.value = '';
    this.props.pushState('/');
  }
  render() {
    const styles = require('./ResetPass.scss');
    return (
      <div className={styles.resetpass}>
        <Helmet title="Reset Password"/>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <Col xs={18} sm={6} md={6} mdOffset={3}>
              <div className={styles.formContainer}>
                <h1>To Reset Password</h1>
                <p>Please enter your email address below and check your email to reset password</p>
                <div className={styles.form}>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input type="text" ref="email" className="form-control"/>
                    </div>
                    <Col xs={18} sm={12} md={12}>
                      <button className="btn btn-success" onClick={this.handleSubmit}>
                        Reset Password
                      </button>
                    </Col>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
