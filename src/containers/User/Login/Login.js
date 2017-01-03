import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import * as authActions from 'redux/modules/auth';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

@connect(
  state => ({user: state.auth.user}),
  authActions)
export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    login: PropTypes.func,
    logout: PropTypes.func
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.refs.email;
    const password = this.refs.password;
    this.props.login(email.value, password.value);
    email.value = '';
    password.value = '';
  }

  render() {
    const styles = require('./Login.scss');
    // const {user} = this.props;
    return (
      <div className={styles.loginPage}>
        <Helmet title="Login"/>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <Col xs={18} sm={6} md={6}>
              <div className={styles.formContainerSignIn}>
                <h1>SIGN IN</h1>
                <p>For returning customers.</p>
                  <div className={styles.form}>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="inputEmail">Email</label>
                        <input type="text" ref="email" className="form-control"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" ref="password" className="form-control"/>
                      </div>
                      <Col xs={18} sm={12} md={12}>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                          Sign In
                        </button>
                        <br/>
                        <IndexLink to="#">
                          <p>Forgot Your Password?</p>
                        </IndexLink>
                      </Col>
                    </form>
                  </div>
              </div>
              {/* {user &&
                <div>
                  <p>You are currently logged in as {user.name}.</p>
                  <div>
                    <button className="btn btn-danger" onClick={logout}><i className="fa fa-sign-out"/>{' '}Log Out</button>
                  </div>
                </div>
              } */}
            </Col>
            <Col xs={12} sm={6} md={6}>
              <div className={styles.formContainerSignUp}>
                <h1>SIGN UP</h1>
                <p>Create an account to expedite future checkouts, receive emails, discounts and special offers.</p>
                <div className={styles.form}>
                  <form onSubmit={this.handleSignupSubmit}>
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input type="text" ref="signupEmail" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputPassword">Password</label>
                      <input type="password" ref="signuPassword" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputConfirmPassword">Confirm Password</label>
                      <input type="password" ref="confirmPassword" className="form-control"/>
                    </div>
                    <Col xs={12} sm={12} md={12}>
                      <button className="btn btn-success" onClick={this.handleSignupSubmit}>
                        Sign Up
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
