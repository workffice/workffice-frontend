import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { LOADING } from './actions';
import { activateAccountReducer } from './reducers/auth/activateAccountReducer';
import { activatePasswordReducer } from './reducers/auth/activatePasswordReducer';
import { loginReducer } from './reducers/auth/loginReducer';
import { recoveryReducer } from './reducers/auth/recoveryPasswordReducer';
import { registerReducer } from './reducers/auth/registerReducer';
import { resetPasswordReducer } from './reducers/auth/resetPassReducer';
import { collaboratorsReducer } from './reducers/backoffice/collaborator/collaboratorsReducer';
import { loadingCollaboratorReducer } from './reducers/backoffice/collaborator/loading';
import { loadingOfficeReducer } from './reducers/backoffice/office/loading';
import { officeInactivitiesReducer } from './reducers/backoffice/office/officeInactivitiesReducer';
import { officeReducer } from './reducers/backoffice/office/officeReducer';
import { officesReducer } from './reducers/backoffice/office/officesReducer';
import { loadingOfficeBranchReducer } from './reducers/backoffice/officeBranch/loadingReducer';
import { officeBranchAdminReducer } from './reducers/backoffice/officeBranch/officeBranchAdminReducer';
import { officeBranchDetailReducer } from './reducers/backoffice/officeBranch/officeBranchDetailReducer';
import { officeBranchesReducer } from './reducers/backoffice/officeBranch/officeBranchesAdminReducer';
import { collaboratorRolesReducer, rolesReducer } from './reducers/backoffice/rolesReducer';
import { userMeReducer } from './reducers/backoffice/userReducer';
import { entityNotFoundReducer } from './reducers/errors/notFoundReducer';
import { permissionReducer } from './reducers/errors/permissionReducer';
import { notificationReducer } from './reducers/notification/writeNotificationReducer';
import { loadingOfficeBranchSearchReducer } from './reducers/search/loadingReducer';
import { officeBranchSearchReducer } from './reducers/search/officeBranchSearchReducer';

const isLoadingReducer = (state = false, { type, payload }) => {
  let currentState = state;
  if (type === LOADING) {
    currentState = payload;
  }
  return currentState;
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
    officeBranch: officeBranchAdminReducer,
    loadingOfficeBranch: loadingOfficeBranchReducer,
    officeBranchSearch: officeBranchDetailReducer,
    loadingOfficeBranchSearch: loadingOfficeBranchSearchReducer,
    office: officeReducer,
    offices: officesReducer,
    officeInactivities: officeInactivitiesReducer,
    loadingOffice: loadingOfficeReducer,
    officesFound: officeBranchSearchReducer,
    activateUser: activateAccountReducer,
    activatePass: activatePasswordReducer,
    recovery: recoveryReducer,
    register: registerReducer,
    resetPaswword: resetPasswordReducer,
    isLoading: isLoadingReducer,
    notification: notificationReducer,
    permission: permissionReducer,
  });
