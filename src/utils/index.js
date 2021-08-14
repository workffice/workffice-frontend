import { AUTH_TOKEN, readFromLocalStorage } from '../infra/api/localStorage';

export const getOneErrors = errors => {
  if (Array.isArray(errors) && errors.length > 0) {
    return errors[0];
  }
  return errors;
};

export const getUserToken = () => readFromLocalStorage(AUTH_TOKEN);

export const isSessionValid = () => {
  const authType = isUserLoggedin(getUserToken());
  return authType === 'OK';
};

export const isUserLoggedin = authData => {
  if (!authData) {
    return 'INVALID';
  }
  return 'OK';
};
