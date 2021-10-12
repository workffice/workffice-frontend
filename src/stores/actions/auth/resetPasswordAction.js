import { setError, setIsLoading, setSuccess } from "..";
import { resetUserPass } from "../../../infra/api/authentication";


export const FETCH_RESET = 'FETCH_RESET';

export const fetchReset = password => {
    return {
        type: FETCH_RESET,
        payload: password
    }
};

export const resetPassword = (token, password) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchReset(await resetUserPass(token, password)));
        dispatch(setSuccess())
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}