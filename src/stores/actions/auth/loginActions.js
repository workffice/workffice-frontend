import { setError, setIsLoading } from '..';
import { loginAPI } from '../../../api/login';

export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCCESS';

export const fetchLogin = credentials => ({
  type: FETCH_LOGIN,
  payload: credentials,
});

export const userLogin = credentials => async dispatch => {
  dispatch(setIsLoading(true));
  try {
    dispatch(fetchLogin(await loginAPI(credentials)));
  } catch (error) {
    dispatch(setError(error ? error : 'Usuario o password incorrectos.'));
  } finally {
    dispatch(setIsLoading(false));
  }
};
