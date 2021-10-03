import { setError, setIsLoading } from "..";
import { getOfficesAPI } from "../../../api/backoffice/offices";


export const FETCH_OFFICES = 'FETCH_OFFICES';
export const CREATE_OFFICE = 'CREATE_OFFICE';

export const fetchOffices = offices => {
    return {
        type: FETCH_OFFICES,
        payload: offices
    }
};

export const newOffice = office => {
    return {
        type: CREATE_OFFICE,
        payload: office
    }
};

export const fetchOfficesList = (officeHolderId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchOffices(await getOfficesAPI(officeHolderId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const createOffice = (officeBranchId, office) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(newOffice(await createOfficeAPI(officeBranchId, office)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}