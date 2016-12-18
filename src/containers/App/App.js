import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { logout } from 'redux/modules/auth';
import { Footer } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import Image from './text_logo.png';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    // if (!isAuthLoaded(getState())) {
    //   promises.push(dispatch(loadAuth()));
    // }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState: push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
                <div className={styles.brand}/>
                <span>
                  <img id="navbar_img" src={Image} alt="text-logo"/>
                </span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse eventKey={0}>
            <Nav navbar>
              <LinkContainer to="/frenchie">
                <NavItem eventKey={2}>Frenchie's Closet</NavItem>
              </LinkContainer>
              <LinkContainer to="/friends">
                <NavItem eventKey={3}>Friend's Closet</NavItem>
              </LinkContainer>
              <LinkContainer to="/toast">
                <NavItem eventKey={4}>Frenchie's Toast</NavItem>
              </LinkContainer>

            </Nav>
            <Nav navbar pullRight>
              <LinkContainer to="/profile">
                <NavItem eventKey={1}>
                  <i className="glyphicon glyphicon-user"/>
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* App Content - starts */}
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        {/* App Content - ends */}

        <Footer/>

      </div>
    );
  }
}
