import { setError, setIsLoading } from '..';
import { loginAPI } from '../../../api/login';
import { getUserMe } from '../backoffice/userActions';

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
    await dispatch(setError(error));
  }finally{
    await dispatch(getUserMe());
    dispatch(setIsLoading(false));
  }
};
