import { confirmation } from "../infra/api/authentication";
import { createColaborator } from "../infra/api/colaborator";

export const createColaboratorApi = async credentials => {
  const credential = await createColaborator(credentials);
  return credential;
};

export const confirmationAPI = async () => {
  const confirm = await confirmation();
  return confirm;
}
