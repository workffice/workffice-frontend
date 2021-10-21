import { createOffice, getOffice, getOffices, searchOfficeBranches } from "../../infra/api/backoffice/offices";

export const getOfficesAPI = officeHolderId => {
    return Promise.resolve(getOffices(officeHolderId));
}

export const getOfficeAPI = officeId => {
    return Promise.resolve(getOffice(officeId));
}

export const createOfficeAPI = (officeBranchId, office)=>{
    return Promise.resolve(createOffice(officeBranchId, office));
}

export const searchOfficeBranchesAPI = (params) =>{
    return Promise.resolve(searchOfficeBranches(params));
}
