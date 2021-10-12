
import { setError, setIsLoading, setSuccess } from '..';
import { recoveryPasswordAPI } from '../../../api/recoveryPassword';

export const FETCH_RECOVERY = 'FETCH_RECOVERY';

export const fetchRecovery = (userEmail) => {
    return {
        type: FETCH_RECOVERY,
        payload: userEmail ? userEmail : true
    }
};

export const recovery = (userEmail) => async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
        dispatch(fetchRecovery(await recoveryPasswordAPI(userEmail)))
        dispatch(setSuccess())
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
};

