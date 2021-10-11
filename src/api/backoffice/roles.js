import { createRole, fetchRoles, fetchRolesFromCollaborator } from "../../infra/api/roles"

export const createRoleApi = async (officeBranchId, roleBody) => {
  return Promise.resolve(createRole(officeBranchId, roleBody))
}

export const fetchRolesApi = async officeBranchId => {
  return Promise.resolve(fetchRoles(officeBranchId))
}

export const fetchRolesFromCollaboratorApi = async collaboratorId => {
  return Promise.resolve(fetchRolesFromCollaborator(collaboratorId))
}
