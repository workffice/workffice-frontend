import { setError, setIsLoading } from "..";
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
        await dispatch(fetchReset(await resetUserPass(token, password)));
    } catch (error) {
        dispatch(setError(error ? error : 'Ha ocurrido un error, intente nuevamente'));
    } finally {
        await dispatch(setIsLoading(false));
    }

}