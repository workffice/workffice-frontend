import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { HIDE_NOTIFICATION, LOADING, SET_ERROR, SET_SUCCESS } from './actions';
import { activateAccountReducer } from './reducers/auth/activateAccountReducer';
import { activatePasswordReducer } from './reducers/auth/activatePasswordReducer';
import { loginReducer } from './reducers/auth/loginReducer';
import { recoveryReducer } from './reducers/auth/recoveryPasswordReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { resetPasswordReducer } from './reducers/auth/resetPassReducer';
import { collaboratorsReducer } from './reducers/backoffice/collaborator/collaboratorsReducer';
import { loadingCollaboratorReducer } from './reducers/backoffice/collaborator/loading';
import { loadingOfficeReducer } from './reducers/backoffice/office/loading';
import { officeReducer } from './reducers/backoffice/office/officeReducer';
import { officesReducer } from './reducers/backoffice/office/officesReducer';
import { officeBranchesReducer } from './reducers/backoffice/officeBranchesReducer';
import { officeBranchReducer, officeBranchSearchReducer } from './reducers/backoffice/officeBranchReducer';
import { officesFoundReducer } from './reducers/backoffice/officesFoundReducer';
import { collaboratorRolesReducer, rolesReducer } from './reducers/backoffice/rolesReducer';
import { userMeReducer } from './reducers/backoffice/userReducer';
import { entityNotFoundReducer } from './reducers/errors/notFoundReducer';
import { permissionReducer } from './reducers/errors/permissionReducer';

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
  switch (type) {
    case SET_SUCCESS:
      return {
        message: payload.message ? payload.message : null,
        errorCode: null,
        isSuccess: true,
        isError: false,
        show: true,
      }
    case SET_ERROR:
      return {
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
    entitiesNotFound: entityNotFoundReducer,
    collaborators: collaboratorsReducer,
    collaboratorRoles: collaboratorRolesReducer,
    loadingCollaborator: loadingCollaboratorReducer,
    roles: rolesReducer,
    officeBranches: officeBranchesReducer,
    officeBranch: officeBranchReducer,
    officeBranchSearch: officeBranchSearchReducer,
    office: officeReducer,
    offices: officesReducer,
    loadingOffice: loadingOfficeReducer,
    officesFound: officesFoundReducer,
    activateUser: activateAccountReducer,
    activatePass: activatePasswordReducer,
    recovery: recoveryReducer,
    register: registerReducer,
    resetPaswword: resetPasswordReducer,
    isLoading: isLoadingReducer,
    notification: notificationReducer,
    permission: permissionReducer,
  });
