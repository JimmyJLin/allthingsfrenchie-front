import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Helmet from 'react-helmet';
import { isLoaded as isIstagramLoaded, load as loadInstagram } from 'redux/modules/instagram';
import { isLoaded as isProductsLoaded, load as loadProducts } from 'redux/modules/products';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
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
    if (!isProductsLoaded(getState())) {
      promises.push(dispatch(loadProducts()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

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

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const {user} = this.props;
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
                {!user &&
                  <LinkContainer to="/user/login">
                    <NavItem eventKey={1}>
                      Sign In
                    </NavItem>
                  </LinkContainer>
                }
                {user &&
                  <NavDropdown eventKey={2} title="Profile" id="profile-nav-dropdown">
                      <LinkContainer to="/user/profile">
                        <MenuItem eventKey={2.1}>
                          Profile
                        </MenuItem>
                      </LinkContainer>
                      <LinkContainer to="/user/logout">
                        <MenuItem eventKey={2.2} className="logout-link" onClick={this.handleLogout}>
                          Sign Out
                        </MenuItem>
                      </LinkContainer>
                  </NavDropdown>
                }
                <LinkContainer to="/shopping-cart">
                  <NavItem eventKey={3}>
                    <i className="glyphicon glyphicon-shopping-cart"/>
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
