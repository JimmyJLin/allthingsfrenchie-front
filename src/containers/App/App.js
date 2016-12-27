import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import { isLoaded as isIstagramLoaded, load as loadInstagram } from 'redux/modules/instagram';
import { isLoaded as isFrenchieLoaded, load as loadFrenchie } from 'redux/modules/frenchie';
import { logout } from 'redux/modules/auth';
import { Footer, Message } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import Image from './images/text_logo.png';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isIstagramLoaded(getState())) {
      promises.push(dispatch(loadInstagram()));
    }
    if (!isFrenchieLoaded(getState())) {
      promises.push(dispatch(loadFrenchie()));
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
          <div className={styles.navbar}>
            <Navbar.Header>
              <Navbar.Brand>
                <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
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
          </div>
        </Navbar>

        {/* App Content - starts */}
        <div className={styles.appContent}>
          {this.props.children}
        </div>
        {/* App Content - ends */}
        <Message/>
        <br/>
        <br/>
        <Footer/>

      </div>
    );
  }
}
