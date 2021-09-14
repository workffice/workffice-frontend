
import { createColaborator } from "../infra/api/colaborator";

export const createColaboratorApi = async credentials => {
  const credential = await createColaborator(credentials);
  console.log('credentials: ', credential);
  return credential;
};

