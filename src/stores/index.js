import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './reducers/auth/loginReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { LOADING, SET_ERROR } from './actions';

const isLoadingReducer = (state = false, { type, payload }) => {
  let currentState = state;

  if (type === LOADING) {
    currentState = payload;
  }
  return currentState;
};

const setErrorReducer = (state = false, { type, payload }) => {
  let currentState = state;

  if (type === SET_ERROR) {
    currentState = {
      message: payload.error,
    };
  }
  return currentState;
};

export const reducers = routes =>
  combineReducers({
    router: connectRouter(routes),
    login: loginReducer,
    register: registerReducer,
    isLoading: isLoadingReducer,
    error: setErrorReducer,
  });
