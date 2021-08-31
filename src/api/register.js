import { registerUser, confirmation } from '../infra/api/authentication';

export const registerAPI = async credentials => {
  await registerUser(credentials);
  return Promise.resolve();
};

export const confirmationAPI = async ()=>{
  await confirmation();
  return Promise.resolve();
}
