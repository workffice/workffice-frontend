export const AUTH_TOKEN = 'AUTH_TOKEN';
const DEFAULT_TIME = 1000 * 60 * 60;

export const storeAccessToken = access_token => {
  const accessToken = {
    accessToken: access_token.access_token,
    refreshToken: access_token.refresh_token,
    accessExpiresIn: new Date(access_token['.expires']).getTime(),
    refreshExpiresIn: new Date(access_token['.refreshexpires']).getTime(),
    issued: new Date(access_token['.issued']).getTime(),
    browserTime: new Date().getTime(),
    expiresIn: access_token['.expires_in'] * 1000 - 5000, // almost 15 min but without 5'' to check keep it working.
  };
  writeToLocalStorage(accessToken, AUTH_TOKEN);
  return accessToken;
};

/**
 * Store data in ls if it is available
 * @param data object data to be stored
 * @param key
 * @param expiresIn
 */
export const writeToLocalStorage = (data, key, expiresIn) => {
  if (window && window.localStorage) {
    const lsItem = {
      data,
      added: new Date(),
      expiresIn: expiresIn || DEFAULT_TIME,
    };
    return localStorage.setItem(key, JSON.stringify(lsItem));
  }
  throw new Error('No window object detected');
};

export const readFromLocalStorage = key => {
  if (window && window.localStorage) {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result).data : undefined;
  }
  throw new Error('No window object detected');
};
