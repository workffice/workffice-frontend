import { setError, setIsLoading } from "..";
import { fetchRolesApi, fetchRolesFromCollaboratorApi } from "../../../api/backoffice/roles";

export const FETCH_ROLES = 'FETCH_ROLES';
export const FETCH_COLLABORATOR_ROLES = 'FETCH_COLLABORATOR_ROLES';


export const fetchRolesList = roles => {
    return {
        type: FETCH_ROLES,
        payload: roles
    }
};

export const rolesList = (officeBranchId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchRolesList(await fetchRolesApi(officeBranchId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }

}

export const fetchCollaboratorRolesList = collaboratorRoles => {
    return {
        type: FETCH_COLLABORATOR_ROLES,
        payload: collaboratorRoles,
    }
};

export const collaboratorRolesList = collaboratorId => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchCollaboratorRolesList(await fetchRolesFromCollaboratorApi(collaboratorId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }

}