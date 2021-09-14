import { setError, setIsLoading } from "..";
import { activatePasswordAPI } from "../../../api/register";


export const FETCH_CONFIRM_PASSWORD = 'FETCH_CONFIRM_PASSWORD';

export const fetchConfirmationPassword = (confirmationToken) => {
    return {
        type: FETCH_CONFIRM_PASSWORD,
        payload: confirmationToken
    }
}

export const confirmationPassword = (confirmationToken, newPassword) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(fetchConfirmationPassword(await activatePasswordAPI(confirmationToken, newPassword)));
    } catch (error) {
        await dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
};