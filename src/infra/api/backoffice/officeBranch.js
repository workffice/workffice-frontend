import { headerGet, headersPost, sdkAuthRequest, sdkNoAuthRequest } from ".."
import { API_OFFICE_BRANCHES, API_OFFICE_HOLDERS } from "../../../environments/environment"
import { writeToLocalStorage } from "../localStorage";

export const createOfficeBranchInfra = async (officeBranchData, userId) => {
    try {
        const officeBranch = await sdkAuthRequest(
            `${API_OFFICE_HOLDERS}/${userId}/office_branches/`,
            {
                method: 'POST',
                headers: headersPost,
                body: JSON.stringify(officeBranchData)
            }
        );
        return Promise.resolve(officeBranch.data);
    } catch (error) {
        return Promise.reject(new Error(error.errors[0].error));
    }

}

export const editOfficeBranchInfra = async (officeBranchData, officeBranchId) => {
    try {
        const officeBranch = await sdkAuthRequest(
            `${API_OFFICE_BRANCHES}/${officeBranchId}/`,
            {
                method: 'PUT',
                headers: headersPost,
                body: JSON.stringify(officeBranchData)
            }
        );
        return Promise.resolve(officeBranch.data);
    } catch (error) {
        return Promise.reject(new Error(error.errors[0].error));
    }

}

export const getOfficeBranchesInfra = async (userId) => {
    try {
        const officesBranches = await sdkNoAuthRequest(
            `${API_OFFICE_HOLDERS}/${userId}/office_branches/`,
            {
                method: 'GET',
                headers: headerGet
            }
        )
        return Promise.resolve(officesBranches.data)
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }

}
export const getOfficeBranchInfra = async (officeBranchId) => {
    try {
        const officeBranch = await sdkNoAuthRequest(
            `${API_OFFICE_BRANCHES}/${officeBranchId}/`,
            {
                method: 'GET',
                headers: headerGet
            }
        )
        writeToLocalStorage(officeBranch.data, "officeBranch")
        return Promise.resolve(officeBranch);
    } catch (error) {
        return Promise.reject(new Error(error.errors[0].error));
    }

}