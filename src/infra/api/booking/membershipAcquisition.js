import { headersPost, sdkAuthRequest } from "..";
import { API_URL } from "../../../environments/environment";

export const acquireMembership = async membershipId => {
    try {
        const membershipAcquired = await sdkAuthRequest(`${API_URL}/memberships/${membershipId}/acquisitions/`, {
            method: 'POST',
            headers: headersPost,
        });
        return Promise.resolve(membershipAcquired.data.uri.match("/api/membership_acquisitions/(.*)/")[1]);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
};
