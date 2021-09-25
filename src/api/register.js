import { registerUser, activateUser, activatePass } from '../infra/api/authentication';

export const registerAPI = async credentials => {
  const credential = await registerUser(credentials);
  return credential;
};

export const activateUserAPI = async (confirmationToken) => {
  const userActivated = await activateUser(confirmationToken);
  return userActivated;
}

export const activatePasswordAPI = async (confirmationToken, newPassword) => {
  const userActivated = await activatePass(confirmationToken, newPassword);
  return userActivated;
}
