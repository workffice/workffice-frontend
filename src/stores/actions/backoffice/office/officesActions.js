import { setError } from "../..";
import { getOfficesAPI } from "../../../../api/backoffice/offices";
import { loadingOfficeAction, stopLoadingOfficeAction } from "./loadingActions";

export const FETCH_OFFICES = 'FETCH_OFFICES';

export const fetchOffices = offices => ({
    type: FETCH_OFFICES,
    payload: offices
});

export const fetchOfficesList = officeBranchId => async dispatch => {
    dispatch(loadingOfficeAction());
    try {
        dispatch(fetchOffices(await getOfficesAPI(officeBranchId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(stopLoadingOfficeAction());
    }
}
