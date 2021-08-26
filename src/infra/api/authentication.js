import {
  API_AUTHENTICATIONS_URL,
  API_AUTH_URL,
} from '../../environments/environment';
import { getUserToken, isUserLoggedin } from '../../utils';
import { storeAccessToken } from './localStorage';
import { sdkNoAuthRequest } from './index';

const authRequestOkAction = (userToken, options) =>
  Promise.resolve({
    ...(options ? options : {}),
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${userToken.accessToken}`,
    },
  });

const authRequestRefreshAction = async ({ refreshToken }, options) => {
  try {
    const rawAccessToken = await sdkNoAuthRequest(
      `${API_AUTHENTICATIONS_URL}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: `refresh_token=${refreshToken}`,
      }
    );
    return authRequestOkAction(storeAccessToken(rawAccessToken), options);
  } catch {
    throw new Error('Not able to refresh the token');
  }
};

const authRequestAction = {
  ['OK']: authRequestOkAction,
  ['REFRESH']: authRequestRefreshAction,
  default: () => {
    throw new Error('Need to login');
  },
};

/**
 * This method is used to check if the user is LS user token is valid & refresh the token if it is necessary
 * @param options any
 */
export const authenticatedRequest = async options => {
  const userToken = getUserToken();
  return (
    authRequestAction[isUserLoggedin(userToken)] || authRequestAction.default
  )(userToken, options);
};

/**
 * Login an user and store its token data in LS
 * @param credentials  username & passowrd
 */
export const loginUser = async (credentials) => {
  const userToken = getUserToken();
  if (userToken && isUserLoggedin(userToken) === true) {
    return Promise.resolve(userToken);
  }
  try {
    const rawAccessToken = await sdkNoAuthRequest(
      `${API_AUTHENTICATIONS_URL}/`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf8',
        },
        body: JSON.stringify(credentials)
      }
    );
    return Promise.resolve(await storeAccessToken(rawAccessToken));
  } catch {
    throw new Error('Not able to login');
  }
};
/**
 * Register an user
 * @param credentials  username , passowrd & type ('OFFICE_HOLDER | RENTER')
 */
export const registerUser = async (credentials) => {
  try {
    await sdkNoAuthRequest(`${API_AUTH_URL}/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=utf8',
      },
      body: JSON.stringify(credentials)
    });
    return Promise.resolve();
  } catch (error) {
    throw new Error('Not able to login');
  }
};
