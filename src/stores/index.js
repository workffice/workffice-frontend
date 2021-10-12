import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './reducers/auth/loginReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { HIDE_NOTIFICATION, LOADING, SET_ERROR, SET_SUCCESS } from './actions';
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


const notificationInitialState = {
  message: null,
  isSuccess: false,
  isError: false,
  show: false,
  errorCode: null,
}
const notificationReducer = (state = notificationInitialState, { type, payload }) => {
  switch(type) {
    case SET_SUCCESS:
      return  {
        message: payload.message ? payload.message : null,
        errorCode: null,
        isSuccess: true,
        isError: false,
        show: true,
      }
    case SET_ERROR:
      return  {
        message: payload.message ? payload.message : null,
        errorCode: payload.error ? payload.error : null,
        isSuccess: false,
        isError: true,
        show: true,
      }
    case HIDE_NOTIFICATION:
      return {
        message: null,
        errorCode: null,
        isSuccess: false,
        isError: false,
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
    notification: notificationReducer,
  });
