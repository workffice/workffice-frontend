import { headerGet, headersPost, sdkAuthRequest, sdkNoAuthRequest } from "..";
import { API_OFFICE_BRANCHES, API_URL } from "../../../environments/environment";
import { searchQueryBuilder } from "../../../utils/searchQueryBuilder";
import { postImageToCloudinary } from "../cloudinary";


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

export const getOffice = async officeId => {
    try {
        const office = await sdkNoAuthRequest(
            `${API_URL}/offices/${officeId}/`,
            {
                method: 'GET',
                headers: headerGet
            }
        );
        return Promise.resolve(office.data);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}

export const createOffice = async (officeBranchId, office) => {
    try {
        let imageData = null
        if (office.photo)
            imageData = await postImageToCloudinary(office.photo)
        const officeCreated = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/offices/`,
            {
                method: 'POST',
                headers: headersPost,
                body: imageData !== null ? JSON.stringify({ ...office, imageUrl: imageData.public_id }) : JSON.stringify(office)
            });
        if (office.inactivityDays.length > 0) {
            const officeId = officeCreated.data.uri.match("/api/offices/(.*)/")[1]
            office.inactivityDays.map(async (inactivityDay) => {
                await sdkAuthRequest(`${API_URL}/offices/${officeId}/inactivities/`,
                    {
                        method: 'POST',
                        headers: headersPost,
                        body: JSON.stringify(inactivityDay)
                    });
            })
        }
        return Promise.resolve(officeCreated);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}

export const updateOffice = async (officeId, office) => {
    try {
        let imageData = null
        if (office.photo)
            imageData = await postImageToCloudinary(office.photo)
        const officeUpdated = await sdkAuthRequest(
            `${API_URL}/offices/${officeId}/`,
            {
                method: 'PUT',
                headers: headersPost,
                body: imageData !== null ? JSON.stringify({ ...office, imageUrl: imageData.public_id }) : JSON.stringify(office)
            });
        if (office.inactivityDays.length > 0) {
            await sdkAuthRequest(`${API_URL}/offices/${officeId}/inactivities/`,
                {
                    method: 'PUT',
                    headers: headersPost,
                    body: JSON.stringify(office.inactivityDays)
                });
        }
        return Promise.resolve(officeUpdated);
    } catch (error) {
        return Promise.reject(error.errors[0]);
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

export const getOfficeInactivities = async officeId => {
    try {
        const inactivities = await sdkNoAuthRequest(
            `${API_URL}/offices/${officeId}/inactivities/`,
            {
                method: 'GET',
                headers: headerGet
            }
        )
        return Promise.resolve(inactivities.data)
    } catch (error) {
        return Promise.reject(error.errors[0])
    }
}
