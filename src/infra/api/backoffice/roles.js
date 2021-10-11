import { headerGet, headersPost, sdkAuthRequest } from "..";
import { API_OFFICE_BRANCHES, API_URL } from "../../../environments/environment";

export const createRole = async (officeBranchId, roleBody) => {
    try {
        const response = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/roles/`, {
            method: 'POST',
            headers: headersPost,
            body: JSON.stringify(roleBody)
        });
        return Promise.resolve(response);
    } catch (error) {
        return Promise.reject(error.errors[0].error);
    }
}

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
        const roles = await sdkAuthRequest(`${API_URL}/collaborators/${collaboratorId}/roles/`, {
            method: 'GET',
            headers: headerGet,
        });
        return { [collaboratorId]: roles.data };
    } catch (error) {
        return error.errors[0].error;
    }
}