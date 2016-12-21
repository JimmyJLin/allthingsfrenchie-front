const LOAD = 'redux-example/LOAD';
const LOAD_SUCCESS = 'redux-example/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function instagram(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      console.log('inside load');
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      console.log('inside load success');
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      console.log('inside load fail');
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.instagram && globalState.instagram.loaded;
}

export function load() {
  console.log('inside loadInsta yayyyyy');
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/instagram')
  };
}
