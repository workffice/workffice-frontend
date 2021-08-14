import { loginUser } from '../infra/api/authentication';

export const loginAPI = async credentials => {
  await loginUser(credentials);
  return Promise.resolve();
};
