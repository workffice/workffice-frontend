import { headersPost, sdkAuthRequest } from "..";
import { API_OFFICE_BRANCHES } from "../../../environments/environment";


export const createServiceInfra = async (officeBranchId, service) => {
    try {
        const serviceCreated = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/services/`,
            {
                method: 'POST',
                headers: headersPost,
                body: JSON.stringify(service)
            });
        return Promise.resolve(serviceCreated);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}
export const createEquipmentsInfra = async (officeBranchId, equipments) => {
    try {
        const equipmentsCreated = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/equipments/`,
            {
                method: 'POST',
                headers: headersPost,
                body: JSON.stringify(equipments)
            });
        return Promise.resolve(equipmentsCreated);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}