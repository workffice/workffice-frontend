import { registerUser, confirmation } from '../infra/api/authentication';

export const registerAPI = async credentials => {
  const credential = await registerUser(credentials);
  return credential;
};

export const confirmationAPI = async () => {
  const confirm = await confirmation();
  return confirm;
}
