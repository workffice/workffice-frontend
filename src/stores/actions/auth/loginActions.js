import { setError, setIsLoading, setSuccess } from '..';
import { loginAPI } from '../../../api/login';

export const FETCH_LOGIN = 'FETCH_LOGIN';

export const fetchLogin = (credentials) => (
  {
    type: FETCH_LOGIN,
    payload: credentials,
  }
);

export const userLogin = (credentials) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    dispatch(fetchLogin(await loginAPI(credentials)));    
    dispatch(setSuccess())
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(setIsLoading(false));
  }
};
