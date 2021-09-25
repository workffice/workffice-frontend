import { headerGet, headersPost, sdkAuthRequest, sdkNoAuthRequest } from ".."
import { API_OFFICE_HOLDERS } from "../../../environments/environment"

export const createOfficeBranchInfra = async (officeBranchData, userId) => {
    const officeBranch = await sdkAuthRequest(
        `${API_OFFICE_HOLDERS}/${userId}/office_branches/`,
        {
            method: 'POST',
            headers: headersPost,
            body: JSON.stringify(officeBranchData)
        }
    );
    return officeBranch.data;
}

export const getOfficeBranchesInfra = async (userId) => {
    const officesBranches = await sdkNoAuthRequest(
        `${API_OFFICE_HOLDERS}/${userId}/office_branches/`,
        {
            method: 'GET',
            headers: headerGet
        }
    )
    return officesBranches;
}