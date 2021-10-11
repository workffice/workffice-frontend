import { fetchRoles, fetchRolesFromCollaborator } from "../../infra/api/roles"

export const fetchRolesApi = async officeBranchId => {
  return Promise.resolve(fetchRoles(officeBranchId))
}

export const fetchRolesFromCollaboratorApi = async collaboratorId => {
  return Promise.resolve(fetchRolesFromCollaborator(collaboratorId))
}