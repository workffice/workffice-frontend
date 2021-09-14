import { headersPost, sdkAuthRequest } from ".."
import { API_OFFICE_HOLDERS } from "../../../environments/environment"


export const createOfficeBranchInfra = async (officeBranchData, userId) => {
    console.log("userId",userId);
    const officeBranch = await sdkAuthRequest(
        `${API_OFFICE_HOLDERS}/${userId}/office_branches/`,
        {
            method: 'POST',
            headers: headersPost,
            body: JSON.stringify(officeBranchData)
        }
    );

    console.log(officeBranch);
    return officeBranch;
}