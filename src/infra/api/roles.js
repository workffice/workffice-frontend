import { headerGet, sdkAuthRequest } from ".";
import { API_OFFICE_BRANCHES } from "../../environments/environment";

export const fetchRoles = async officeBranchId => {
    try {
        const roles = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/roles/`, {
            method: 'GET',
            headers: headerGet,
        });
        return roles.data;
    } catch (error) {
        return error.errors[0].error;
    }
}

export const fetchRolesFromCollaborator = async collaboratorId => {
    try {
        const roles = await sdkAuthRequest(`http://localhost:8080/api/collaborators/${collaboratorId}/roles/`, {
            method: 'GET',
            headers: headerGet,
        });
        return {[collaboratorId]: roles.data};
    } catch (error) {
        return error.errors[0].error;
    }
}