import { createOfficeBranchInfra, getOfficeBranchesInfra } from "../../infra/api/backoffice/officeBranch";


export const createOfficeBranchAPI = async (officeBranchData, userId) => {
    const officeBranch = await createOfficeBranchInfra(officeBranchData, userId);
    return officeBranch;
}

export const officeBranchListAPI = async (userId)=>{
    const officesBranches = await getOfficeBranchesInfra(userId);
    return officesBranches;
}