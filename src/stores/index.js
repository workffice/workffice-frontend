import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './reducers/auth/loginReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { HIDE_ERROR, LOADING, SET_ERROR } from './actions';
import { recoveryReducer } from './reducers/auth/recoveryPasswordReducer';

const isLoadingReducer = (state = false, { type, payload }) => {
  let currentState = state;

  if (type === LOADING) {
    currentState = payload;
  }
  return currentState;
};

const setErrorReducer = (state = null, { type, payload }) => {
  let currentState = state;
  if (type === SET_ERROR) {
    currentState = payload ? payload : null;
  } else if (type === HIDE_ERROR) {
    currentState = payload ? payload : null;
  }
  return currentState;
};

export const reducers = routes =>
  combineReducers({
    router: connectRouter(routes),
    login: loginReducer,
    recovery: recoveryReducer,
    register: registerReducer,
    isLoading: isLoadingReducer,
    error: setErrorReducer,
  });
