import { fetchRoles } from "../../infra/api/roles"

export const fetchRolesApi = async (officeBranchId) => {
    return Promise.resolve(fetchRoles(officeBranchId))
  }