
import { createColaborator } from "../infra/api/colaborator";

export const createColaboratorApi = async (credentials, officeBranchId) => {
  const credential = await createColaborator(credentials,officeBranchId);
  console.log('credentials: ', credential);
  return credential;
};

