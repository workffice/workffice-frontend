import { setError, setIsLoading } from "..";
import { recoveryPasswordAPI } from "../../../api/recoveryPassword";

export const FETCH_RECOVERY = 'FETCH_RECOVERY';

export const fetchRecovery = (userEmail) => ({
    type: FETCH_RECOVERY,
    payload: userEmail
});

export const recoveryPassword = (userEmail) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(await recoveryPasswordAPI(userEmail));
        dispatch(setIsLoading(false))
    } catch (error) {
        dispatch(setError(error ? error : null));
    }
}