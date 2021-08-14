import { setError, setIsLoading } from '..';
import { registerAPI } from '../../../api/register';

export const FETCH_REGISTER = 'FETCH_REGISTER';

export const fetchRegister = credentials => ({
  type: FETCH_REGISTER,
  payload: credentials,
});

export const register = (credentials) => async (dispatch) => {
  console.log("ACTION", credentials);
  dispatch(setIsLoading(true));
  try {
    dispatch(fetchRegister(await registerAPI(credentials)));
  } catch (error) {
    dispatch(
      setError(error ? error : 'No ha sido posible realizar el registro')
    );
  } finally {
    dispatch(setIsLoading(false));
  }
};