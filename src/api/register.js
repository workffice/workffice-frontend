import { registerUser } from '../infra/api/authentication';

export const registerAPI = async credentials => {
  console.log("API", credentials);
  await registerUser(credentials);
  return Promise.resolve();
};
