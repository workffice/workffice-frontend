import { setError, setIsLoading, setSuccess } from "..";
import { createRoleApi, deleteRoleApi, fetchRolesApi, fetchRolesFromCollaboratorApi } from "../../../api/backoffice/roles";
import { setForbiddenAccessAction, setSuccessAccess } from "../auth/permissionActions";

export const CREATE_ROLE = 'CREATE_ROLE';
export const DELETE_ROLE = 'DELETE_ROLE';
export const FETCH_ROLES = 'FETCH_ROLES';
export const FETCH_COLLABORATOR_ROLES = 'FETCH_COLLABORATOR_ROLES';


export const createRoleAction = response => {
    return {
        type: CREATE_ROLE,
        payload: response
    }
};

export const createRole = (officeBranchId, roleBody) => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        dispatch(createRoleAction(await createRoleApi(officeBranchId, roleBody)));
        dispatch(setSuccess())
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const deleteRoleAction = roleIdDeleted => {
    return {
        type: DELETE_ROLE,
        payload: roleIdDeleted
    }
};

export const deleteRole = roleId => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        dispatch(deleteRoleAction(await deleteRoleApi(roleId)));
        dispatch(setSuccess())
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}

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
        dispatch(setSuccessAccess('role'))
    } catch (error) {
        if (error.code === "FORBIDDEN")
            dispatch(setForbiddenAccessAction("role"));
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
        dispatch(setSuccessAccess('role'))
    } catch (error) {
        if (error.code === "FORBIDDEN")
            dispatch(setForbiddenAccessAction("role"));
    } finally {
        dispatch(setIsLoading(false));
    }

}