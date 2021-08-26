import { setError, setIsLoading } from '..';
import { registerAPI } from '../../../api/register';

export const FETCH_REGISTER = 'FETCH_REGISTER';

export const fetchRegister = credentials => ({
  type: FETCH_REGISTER,
  payload: credentials ? credentials : null,
});

export const register = (credentials) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    await dispatch(fetchRegister(await registerAPI(credentials)));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 2000);
  } catch (error) {
    await dispatch(
      setError(error ? error : 'No ha sido posible realizar el registro')
    );
  } 
};
