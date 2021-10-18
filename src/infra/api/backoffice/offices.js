import { headerGet, sdkAuthRequest, sdkNoAuthRequest } from ".."
import { API_OFFICE_BRANCHES } from "../../../environments/environment"
import { searchQueryBuilder } from "../../../utils/searchQueryBuilder";


export const getOffices = async officeBranchId => {
    try {
        const offices = await sdkNoAuthRequest(
            `${API_OFFICE_BRANCHES}/${officeBranchId}/offices/`,
            {
                method: 'GET',
                headers: headerGet
            }
        );
        return Promise.resolve(offices.data);
    } catch (error) {
        return Promise.reject(error.errors[0]);
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

export const searchOfficeBranches = async params => {
    try {
        let officesFound;
        const queryParams = searchQueryBuilder(params)

        if (queryParams !== null) {
            officesFound = await sdkNoAuthRequest(
                `${API_OFFICE_BRANCHES}/search/?${queryParams}`,
                {
                    method: 'GET',
                    headers: headerGet
                }
            )
        } else {
            officesFound = await sdkNoAuthRequest(
                `${API_OFFICE_BRANCHES}/search/`,
                {
                    method: 'GET',
                    headers: headerGet
                }
            )
        }
        return Promise.resolve(officesFound);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}