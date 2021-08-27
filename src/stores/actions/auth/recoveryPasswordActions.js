import { setError, setIsLoading } from "..";
import { recoveryPasswordAPI } from "../../../api/recoveryPassword";

export const FETCH_RESET = 'FETCH_RESET';

export const fetchReset = (userEmail) => ({
    type: FETCH_RESET,
    payload: userEmail
});

export const resetPassword = (userEmail) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(await recoveryPasswordAPI(userEmail));
        setTimeout(() => {
            dispatch(setIsLoading(false))
        }, 2000)
    } catch (error) {
        dispatch(setError(error ? error : null));
    }
}