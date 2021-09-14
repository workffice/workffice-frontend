import { createOfficeBranchInfra } from "../../infra/api/backoffice/officeBranch";


export const createOfficeBranchAPI = async (officeBranchData, userId) => {
    const officeBranch = await createOfficeBranchInfra(officeBranchData, userId);
    return officeBranch;
}