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
import { resetPasswordReducer } from './reducers/auth/resetPassReducer';
import { officeBranchesReducer } from './reducers/backoffice/officeBranchesReducer';
import { officeReducer } from './reducers/backoffice/officeReducer';
import { officesFoundReducer } from './reducers/backoffice/officesFoundReducer';
import { collaboratorsReducer } from './reducers/backoffice/collaboratorsReducer';
import { collaboratorRolesReducer, rolesReducer } from './reducers/backoffice/rolesReducer';

const isLoadingReducer = (state = false, { type, payload }) => {
  let currentState = state;
  if (type === LOADING) {
    currentState = payload;
  }
  return currentState;
};

const setErrorReducer = (state = { message: null, show: false }, { type, payload }) => {
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
    collaborators: collaboratorsReducer,
    collaboratorRoles: collaboratorRolesReducer,
    roles: rolesReducer,
    officeBranches: officeBranchesReducer,
    officeBranch: officeBranchReducer,
    office: officeReducer,
    officesFound: officesFoundReducer,
    activateUser: activateAccountReducer,
    activatePass: activatePasswordReducer,
    recovery: recoveryReducer,
    register: registerReducer,
    resetPaswword: resetPasswordReducer,
    createColaborator: createCollaboratorReducer,
    isLoading: isLoadingReducer,
    error: setErrorReducer,
  });
