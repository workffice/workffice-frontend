import { createEquipmentsInfra, createServiceInfra } from "../../infra/api/backoffice/servicesEquipments";

export const createServiceAPI = (officeBranchId, services) => {
    return Promise.resolve(createServiceInfra(officeBranchId, services));
}
export const createEquipmentsAPI = (officeBranchId, equipments) => {
    return Promise.resolve(createEquipmentsInfra(officeBranchId, equipments));
}