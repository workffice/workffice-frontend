import { setError, setIsLoading } from "..";
import { getOfficesAPI } from "../../../api/backoffice/offices";


export const FETCH_OFFICES = 'FETCH_OFFICES';

export const fetchOffices = offices => {
    return {
        type: FETCH_OFFICES,
        payload: offices
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