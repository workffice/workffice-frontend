import { registerUser, activateUser, activatePass } from '../infra/api/authentication';

export const registerAPI = async credentials => {
  return Promise.resolve(registerUser(credentials));
};

export const activateUserAPI = async (confirmationToken) => {
  return Promise.resolve(activateUser(confirmationToken));
}

export const activatePasswordAPI = async (confirmationToken, newPassword) => {
  return Promise.resolve(activatePass(confirmationToken, newPassword));
}
