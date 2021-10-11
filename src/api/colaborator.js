
import { createColaborator, fetchCollaborators } from "../infra/api/colaborator";

export const createColaboratorApi = async (credentials, officeBranchId) => {
  return Promise.resolve(createColaborator(credentials, officeBranchId));
};


export const fetchCollaboratorsApi = async (officeBranchId) => {
  return Promise.resolve(fetchCollaborators(officeBranchId))
}
