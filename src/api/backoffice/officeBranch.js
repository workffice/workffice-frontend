

export const createOfficeBranchAPI = async officeBranchData => {
    const officeBranch = await createOfficeBranchInfra(officeBranchData);
    return officeBranch;
}