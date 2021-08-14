import { authenticatedRequest } from './authentication';

/**
 * Generic request handler
 *
 * @param requestUrl string url for request the api endpoint
 * @param options options for specify the request parameters
 * @returns the resolved promise of the request in json format
 * @throws Generic error
 */
const sdkRequest = async (
  requestUrl,
  options
  //errorHandler?: () => void, add error handler
) => {
  console.info('SDKREQUEST  ', options);
  let response;
  try {
    response = await (options ? fetch(requestUrl, options) : fetch(requestUrl));

    const result = await response.json();
    if (!response.ok) {
      return Promise.reject(result);
    }
    return result;
  } catch {
    throw new Error('Server Error');
  }
};

export const sdkNoAuthRequest = sdkRequest;

export const sdkAuthRequest = async (requestUrl, options) =>
  sdkRequest(requestUrl, await authenticatedRequest(options));