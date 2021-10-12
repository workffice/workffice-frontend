
import { createColaborator as createCollaborator, fetchCollaborators, updateCollaborator } from "../../infra/api/backoffice/collaborator";

export const createCollaboratorApi = async (officeBranchId, collaboratorBody) => {
  return Promise.resolve(createCollaborator(officeBranchId, collaboratorBody));
};


export const fetchCollaboratorsApi = async (officeBranchId) => {
  return Promise.resolve(fetchCollaborators(officeBranchId))
}

export const updateCollaboratorApi = async (collaboratorId, collaboratorBody) => {
  return Promise.resolve(updateCollaborator(collaboratorId, collaboratorBody))
}