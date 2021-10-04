import { headerGet, sdkAuthRequest, sdkNoAuthRequest } from ".."
import { API_OFFICE_BRANCHES } from "../../../environments/environment"


export const getOffices = async (officeHolderId) => {
    try {
        const offices = await sdkNoAuthRequest(
            `${API_OFFICE_BRANCHES}/${officeHolderId}/offices/`,
            {
                method: 'GET',
                headers: headerGet
            }
        );
        return Promise.resolve(offices);
    } catch (error) {
        return Promise.reject(new Error(error.errors[0].error));
    }
}

export const createOffice = async (officeBranchId, office) => {
    try {
        const officeCreated = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/offices/`,
            {
                method: 'POST',
                headers: headerGet,
                body: JSON.stringify(office)
            });
        return Promise.resolve(officeCreated);
    } catch (error) {
        return Promise.reject(new Error(error.errors[0].error));
    }
}