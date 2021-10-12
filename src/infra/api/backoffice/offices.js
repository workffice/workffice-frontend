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

export const search = async (params) => {
    try {

        const { search, office_capacity_gt, office_capacity_lt, office_type } = params
        console.log('%cMyProject%cline:37%coffice_capacity_gt', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(251, 178, 23);padding:3px;border-radius:2px', office_capacity_gt)
    
        console.log('%cMyProject%cline:37%coffice_capacity_gt', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(254, 67, 101);padding:3px;border-radius:2px', office_capacity_gt)
        let officesFound;
        let queryParams = '';

        if (queryParams.length > 0 && search.length > 0) {
            queryParams = `?name=${search}`;
        }

        if (queryParams.length > 0 && office_capacity_gt.length > 0) {
            queryParams += `&office_capacity_gt=${office_capacity_gt}&office_capacity_lt=${office_capacity_lt ? office_capacity_lt : null}`;
        } else if(office_capacity_gt.length > 0){
            queryParams += `?office_capacity_gt=${office_capacity_gt}&office_capacity_lt=${office_capacity_lt ? office_capacity_lt : null}`;
        }

        if (queryParams.length > 0 && office_capacity_lt.length > 0) {
            queryParams += `&office_capacity_lt=${office_capacity_lt}`;
        } else if(office_capacity_lt.length > 0){
            queryParams += `?office_capacity_lt=${office_capacity_lt}`;
        }

        if (queryParams.length > 0 && office_type.length > 0) {
            queryParams += `&office_type=${office_type}`;
        } else if(office_type.length > 0){
            queryParams += `?office_type=${office_type}`;
        }

        // search.length > 0 ? queryParams = `?name=${name}` : queryParams;
        // office_capacity_gt.length > 0 ? queryParams = `?office_capacity_gt=${office_capacity_gt}` : queryParams;
        // office_capacity_lt.length > 0 ? queryParams = `?office_capacity_lt=${office_capacity_lt}` : queryParams;
        // office_type.length > 0 ? queryParams = `?office_type=${office_type}` : queryParams;
        // queryParams
        console.log('%cMyProject%cline:46%cqueryParams', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(56, 13, 49);padding:3px;border-radius:2px', queryParams)
        if (queryParams !== null) {
            officesFound = await sdkNoAuthRequest(
                `${API_OFFICE_BRANCHES}/search/${queryParams}`,
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
        return Promise.reject(new Error(error.errors[0].error));
    }
}