import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './reducers/auth/loginReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { HIDE_ERROR, LOADING, SET_ERROR } from './actions';
import { recoveryReducer } from './reducers/auth/recoveryPasswordReducer';
import { activateAccountReducer } from './reducers/auth/activateAccountReducer';
import { activatePasswordReducer } from './reducers/auth/activatePasswordReducer';
import { createCollaboratorReducer } from './reducers/auth/collaboratorReducer';
import { officeBranchReducer } from './reducers/backoffice/officeBranchReducer';
import { userMeReducer } from './reducers/backoffice/userReducer';

const isLoadingReducer = (state = false, { type, payload }) => {
  let currentState = state;
  if (type === LOADING) {
    currentState = payload;
  }
  return currentState;
};

const setErrorReducer = (state = { meesage: null, show: false }, { type, payload }) => {
  let currentState = state;
  if (type === SET_ERROR) {
    currentState = {
      message: payload.message ? payload.message : null,
      show: true
    };
  } else if (type === HIDE_ERROR) {
    currentState = currentState = {
      message: payload ? payload : null,
      show: false
    };
  }
  return currentState;
};

export const reducers = routes =>
  combineReducers({
    router: connectRouter(routes),
    login: loginReducer,
    userMe: userMeReducer,
    officeBranch: officeBranchReducer,
    activateUser: activateAccountReducer,
    activatePass: activatePasswordReducer,
    recovery: recoveryReducer,
    register: registerReducer,
    createColaborator: createCollaboratorReducer,
    isLoading: isLoadingReducer,
    error: setErrorReducer,
  });
