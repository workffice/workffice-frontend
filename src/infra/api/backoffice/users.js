import { headerGet, headersPost, sdkAuthRequest } from ".."
import { API_AUTH_URL } from "../../../environments/environment"

export const getMe = async () => {
    try {
        const userData = await sdkAuthRequest(`${API_AUTH_URL}/me/`,
            {
                method: 'GET',
                headers: headerGet
            });
        return Promise.resolve(userData.data);
    } catch (error) {
        throw Promise.reject(error.errors[0].error);
    }

}

export const updateUser = async (userId, userData) => {
    try {
        const userUpdated = await sdkAuthRequest(`${API_AUTH_URL}/${userId}/`,
            {
                method: 'PUT',
                headers: headersPost,
                body: JSON.stringify(userData),
            });
        return Promise.resolve(userUpdated)
    } catch (error) {
        return Promise.reject(new Error(error.errors[0].error));
    }

}