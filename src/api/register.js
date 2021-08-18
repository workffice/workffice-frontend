import { registerUser } from '../infra/api/authentication';

export const registerAPI = async credentials => {
  await registerUser(credentials);
  return Promise.resolve();
};
