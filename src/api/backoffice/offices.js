import { getOffices } from "../../infra/api/backoffice/offices";

export const getOfficesAPI = (officeHolderId) => {
    return Promise.resolve(getOffices(officeHolderId));
}