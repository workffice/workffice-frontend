
import { createColaborator } from "../infra/api/colaborator";

export const createColaboratorApi = async (credentials, officeBranchId) => {
  return Promise.resolve(createColaborator(credentials, officeBranchId));
};

