import { sdkAuthRequest } from ".."
import { API_AUTH_URL, API_OFFICE_HOLDERS } from "../../../environments/environment"
import { getUserToken } from "../../../utils"


export const createOfficeBranchInfra = async (officeBranchData) => {
    const token = getUserToken();

    const userMe = await sdkAuthRequest(
        `${API_AUTH_URL}/me`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json; charset=utf8',
                'Authorization': 'Bearer ' + token,
            }
        }
    )
    return await sdkAuthRequest(
        `${API_OFFICE_HOLDERS}/${userMe.id}/office_branches/`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json; charset=utf8',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(officeBranchData)
        }
    )
}