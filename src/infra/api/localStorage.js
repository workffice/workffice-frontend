export const AUTH_TOKEN = 'AUTH_TOKEN';
// const DEFAULT_TIME = 1000 * 60 * 60;

export const storeAccessToken = (data) => {
  // const accessToken = {
  //   token
  //   refreshToken: access_token.refresh_token,
  //   accessExpiresIn: new Date(access_token['.expires']).getTime(),
  //   refreshExpiresIn: new Date(access_token['.refreshexpires']).getTime(),
  //   issued: new Date(access_token['.issued']).getTime(),
  //   browserTime: new Date().getTime(),
  //   expiresIn: access_token['.expires_in'] * 1000 - 5000, // almost 15 min but without 5'' to check keep it working.
  // };
  writeToLocalStorage(data.data.token, AUTH_TOKEN);
  return data.token;
};

/**
 * Store data in ls if it is available
 * @param data object data to be stored
 * @param key
 */
export const writeToLocalStorage = (data, key) => {
  if (window && window.localStorage) {
    // const lsItem = {
    //   data,
    //   added: new Date(),
    // expiresIn: expiresIn || DEFAULT_TIME,
    // };
    return localStorage.setItem(key, JSON.stringify(data));
  }
  throw new Error('No window object detected');
};

export const readFromLocalStorage = key => {
  if (window && window.localStorage) {
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  }
  throw new Error('No window object detected');
};
