import { createOfficeBranchInfra, editOfficeBranchInfra, getOfficeBranchesInfra, getOfficeBranchInfra } from "../../infra/api/backoffice/officeBranch";


export const createOfficeBranchAPI = (officeBranchData, userId) => {
    return Promise.resolve(createOfficeBranchInfra(officeBranchData, userId));
}

export const editOfficeBranchAPI = (officeBranchData, userId) => {
    return Promise.resolve(editOfficeBranchInfra(officeBranchData, userId));
}

export const officeBranchListAPI = (userId) => {
    return Promise.resolve(getOfficeBranchesInfra(userId));

}

export const getOfficeBranchIdAPI = (officeBranchId) => {
    return Promise.resolve(getOfficeBranchInfra(officeBranchId));

}