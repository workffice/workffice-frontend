import { setError, setIsLoading } from '..';
import { loginAPI } from '../../../api/login';

export const FETCH_LOGIN = 'FETCH_LOGIN';

export const fetchLogin = (credentials) => {
  return {
    type: FETCH_LOGIN,
    payload: credentials,
  }
};

export const userLogin = (credentials) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    await dispatch(fetchLogin(await loginAPI(credentials)));
  } catch (error) {
    dispatch(setError(error ? error : 'Usuario o password incorrectos.'));
  } finally {
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 2000);
  }
};
