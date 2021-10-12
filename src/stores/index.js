import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './reducers/auth/loginReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { HIDE_ERROR, LOADING, SET_ERROR } from './actions';
import { recoveryReducer } from './reducers/auth/recoveryPasswordReducer';
import { activateAccountReducer } from './reducers/auth/activateAccountReducer';
import { activatePasswordReducer } from './reducers/auth/activatePasswordReducer';
import { officeBranchReducer } from './reducers/backoffice/officeBranchReducer';
import { userMeReducer } from './reducers/backoffice/userReducer';
import { resetPasswordReducer } from './reducers/auth/resetPassReducer';
import { officeBranchesReducer } from './reducers/backoffice/officeBranchesReducer';
import { officeReducer } from './reducers/backoffice/officeReducer';
import { officesReducer } from './reducers/backoffice/officesReducer';
import { collaboratorsReducer } from './reducers/backoffice/collaboratorsReducer';
import { collaboratorRolesReducer, rolesReducer } from './reducers/backoffice/rolesReducer';

const isLoadingReducer = (state = false, { type, payload }) => {
  let currentState = state;
  if (type === LOADING) {
    currentState = payload;
  }
  return currentState;
};


const errorInitialState = {message: null, show: false, errorCode: null}
const setErrorReducer = (state = errorInitialState, { type, payload }) => {
  switch(type) {
    case SET_ERROR:
      return  {
        message: payload.message ? payload.message : null,
        errorCode: payload.error ? payload.error : null,
        show: true
      }
    case HIDE_ERROR:
      return {
        message: null,
        errorCode: null,
        show: false
      }
    default:
      return state
  }
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
    offices: officesReducer,
    activateUser: activateAccountReducer,
    activatePass: activatePasswordReducer,
    recovery: recoveryReducer,
    register: registerReducer,
    resetPaswword: resetPasswordReducer,
    isLoading: isLoadingReducer,
    error: setErrorReducer,
  });
