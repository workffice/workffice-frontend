import { createOffice, getOffices, search } from "../../infra/api/backoffice/offices";

export const getOfficesAPI = (officeHolderId) => {
    return Promise.resolve(getOffices(officeHolderId));
}

export const createOfficeAPI = (officeBranchId, office)=>{
    return Promise.resolve(createOffice(officeBranchId, office));
}

export const searchOfficesAPI = (params) =>{
    return Promise.resolve(search(params));
}