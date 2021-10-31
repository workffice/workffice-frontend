import { setIsLoading } from "../..";
import { createEquipmentsAPI, createServiceAPI } from "../../../../api/backoffice/servicesEquioments";
import { setErrorAction } from "../../notifications/writeNotificationActions";


export const FETCH_CREATE_SERVICE = 'FETCH_CREATE_SERVICE';
export const FETCH_CREATE_EQUIPMENT = 'FETCH_CREATE_EQUIPMENT';


export const fetchCreateService = data => {
    return {
        type: FETCH_CREATE_SERVICE,
        payload: data
    };
};
export const fetchCreateEquipment = data => {
    return {
        type: FETCH_CREATE_EQUIPMENT,
        payload: data
    };
};

export const createService = (officeBranchId, service) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchCreateService(await createServiceAPI(officeBranchId, service)));
    } catch (error) {
        dispatch(setErrorAction(error));
    }
}
export const createEquipment = (officeBranchId, service) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchCreateEquipment(await createEquipmentsAPI(officeBranchId, service)));
    } catch (error) {
        dispatch(setErrorAction(error));
    }
}