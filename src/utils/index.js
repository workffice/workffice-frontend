import { AUTH_TOKEN, readFromLocalStorage } from '../infra/api/localStorage';

export const getOneErrors = errors => {
  if (Array.isArray(errors) && errors.length > 0) {
    return errors[0];
  }
  return errors;
};

export const getUserToken = () => {
  const key = readFromLocalStorage(AUTH_TOKEN);
  return key ? key.accessToken : key;
}

export const isSessionValid = () => {
  const authType = isUserLoggedin(getUserToken());
  return authType;
};

export const isUserLoggedin = authData => {
  if (!authData) {
    return false;
  }
  return 'OK';
};
