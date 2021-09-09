import { setError, setIsLoading } from "..";
import { recoveryPasswordAPI } from '../../../api/recoveryPassword';

export const FETCH_RECOVERY = 'FETCH_RECOVERY';

export const fetchRecovery = (userEmail) => ({
    type: FETCH_RECOVERY,
    payload: userEmail
});

export const recovery = (userEmail) => async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
        await dispatch(fetchRecovery(await recoveryPasswordAPI(userEmail)));
    } catch (error) {
        await dispatch(setError(error ? error : 'Ocurrio un error'));
    } finally {
        await dispatch(setIsLoading(false));
    }
}

  