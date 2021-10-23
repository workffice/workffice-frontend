import { setIsLoading } from "..";
import { activateUserAPI } from "../../../api/register";
import { setErrorAction } from "../notifications/writeNotificationActions";


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
        dispatch(fetchConfirmationAccount(await activateUserAPI(confirmationToken)));
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(setIsLoading(false));
    }
};
