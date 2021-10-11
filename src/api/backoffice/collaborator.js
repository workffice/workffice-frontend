
import { createColaborator as createCollaborator, fetchCollaborators } from "../../infra/api/collaborator";

export const createCollaboratorApi = async (credentials, officeBranchId) => {
  return Promise.resolve(createCollaborator(credentials, officeBranchId));
};


export const fetchCollaboratorsApi = async (officeBranchId) => {
  return Promise.resolve(fetchCollaborators(officeBranchId))
}
