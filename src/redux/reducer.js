import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import { pagination } from 'violet-paginator';

import auth from './modules/auth';
import counter from './modules/counter';
import {reducer as form} from 'redux-form';
import instagram from './modules/instagram';
import frenchie from './modules/frenchie';
import widgets from './modules/widgets';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  form,
  multireducer: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  instagram,
  frenchie,
  pagination,
  widgets
});
