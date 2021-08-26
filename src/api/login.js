import { loginUser } from '../infra/api/authentication';

export const loginAPI = async credentials => {
  const token = await loginUser(credentials);
  return token;
};
