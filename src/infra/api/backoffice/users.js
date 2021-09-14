import { headerGet, sdkAuthRequest } from ".."
import { API_AUTH_URL } from "../../../environments/environment"

export const getMe = async () => {
    try {
        const userData = await sdkAuthRequest(`${API_AUTH_URL}/me/`,
            {
                method: 'GET',
                headers: headerGet
            });
        return userData.data;
    } catch (error) {
        throw error.errors[0].error;
    }

}