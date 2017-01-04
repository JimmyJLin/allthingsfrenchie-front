import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Chat,
    Home,
    Widgets,
    About,
    Login,
    ResetPass,
    LoginSuccess,
    Survey,
    NotFound,
    Pagination,
    Frenchie,
    Friends,
    Toast,
    Profile,
    Instagram,
    Cards,
    ShoppingCart
  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { /* Routes */ }
      <Route path="about" component={About}/>
      {/* <Route path="login" component={Login}/> */}
      <Route path="pagination" component={Pagination}/>
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>

      {/* allthingsfrnehice Routes */}
      <Route path="frenchie" component={Frenchie}/>
      <Route path="frenchie/:name" component={Cards}/>
      <Route path="friends" component={Friends}/>
      <Route path="friends/:name" component={Cards}/>
      <Route path="toast" component={Toast}/>
      <Route path="user/profile" component={Profile}/>
      <Route path="user/login" component={Login}/>
      <Route path="user/reset-password" component={ResetPass}/>
      <Route path="atfcommunity" component={Instagram}/>
      <Route path="shopping-cart" component={ShoppingCart}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
