import { getOffices } from "../../infra/api/backoffice/offices";

export const getOfficesAPI = (officeHolderId) => {
    return Promise.resolve(getOffices(officeHolderId));
}

export const createOfficeAPI = (officeBranchId, office)=>{
    return Promise.resolve(createOffice(officeBranchId, office));
}