import { setError, setIsLoading } from "..";
import { activateUserAPI } from "../../../api/register";


export const FETCH_CONFIRM_ACCOUNT = 'FETCH_CONFIRM_ACCOUNT';

export const fetchConfirmationAccount = (confirmationToken) => {
    return {
        type: FETCH_CONFIRM_ACCOUNT,
        payload: confirmationToken
    }
}

export const confirmation = (confirmationToken) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(fetchConfirmationAccount(await activateUserAPI(confirmationToken)));
    } catch (error) {
        await dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
};
