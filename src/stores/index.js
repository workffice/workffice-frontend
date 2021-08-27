import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './reducers/auth/loginReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { LOADING, SET_ERROR } from './actions';
import { resetReducer } from './reducers/auth/resetPasswordReducer';

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
    currentState = {
      message: payload.error ? payload.error : null,
    };
  }
  return currentState;
};

export const reducers = routes =>
  combineReducers({
    router: connectRouter(routes),
    login: loginReducer,
    reset: resetReducer,
    register: registerReducer,
    isLoading: isLoadingReducer,
    error: setErrorReducer,
  });
