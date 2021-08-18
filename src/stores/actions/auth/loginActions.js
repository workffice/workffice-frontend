import { setError, setIsLoading } from '..';
import { loginAPI } from '../../../api/login';

export const FETCH_LOGIN = 'FETCH_LOGIN';

export const fetchLogin = (credentials) => ({
  type: FETCH_LOGIN,
  payload: credentials || null,
});

export const userLogin = (credentials) => async (dispatch) => {
  console.log("userlogin",credentials);
  dispatch(setIsLoading(true));
  try {
    dispatch(fetchLogin(await loginAPI(credentials)));
  } catch (error) {
    dispatch(setError(error ? error : 'Usuario o password incorrectos.'));
  } finally {
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 2000);
  }
};
