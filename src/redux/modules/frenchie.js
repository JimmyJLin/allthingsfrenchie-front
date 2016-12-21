const PRODUCT_LOAD = 'redux-example/PRODUCT_LOAD';
const PRODUCT_LOAD_SUCCESS = 'redux-example/PRODUCT_LOAD_SUCCESS';
const PRODUCT_LOAD_FAIL = 'redux-example/PRODUCT_LOAD_FAIL';

const initialState = {
  loaded: false
};

export default function frenchie(state = initialState, action = {}) {
  switch (action.type) {
    case PRODUCT_LOAD:
      return {
        ...state,
        loading: true
      };
    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case PRODUCT_LOAD_FAIL:
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
  return globalState.frenchie && globalState.frenchie.loaded;
}

export function load() {
  return {
    types: [PRODUCT_LOAD, PRODUCT_LOAD_SUCCESS, PRODUCT_LOAD_FAIL],
    promise: (client) => client.get('/products')
  };
}
