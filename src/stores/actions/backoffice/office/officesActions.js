import { setError, setIsLoading } from "../..";
import { createOfficeAPI, getOfficesAPI } from "../../../../api/backoffice/offices";


export const FETCH_OFFICES = 'FETCH_OFFICES';
export const CREATE_OFFICE = 'CREATE_OFFICE';
export const LOADING_OFFICE = 'LOADING_OFFICE';
export const STOP_LOADING_OFFICE = 'STOP_LOADING_OFFICE';

export const loadingOfficeAction = () => ({
    type: LOADING_OFFICE,
    payload: null,
})

export const stopLoadingOfficeAction = () => ({
    type: STOP_LOADING_OFFICE,
    payload: null,
})

export const fetchOffices = offices => ({
    type: FETCH_OFFICES,
    payload: offices
});

export const newOffice = office => ({
    type: CREATE_OFFICE,
    payload: office
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

export const createOffice = (officeBranchId, office) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(newOffice(await createOfficeAPI(officeBranchId, office)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(fetchOfficesList(officeBranchId))
        dispatch(setIsLoading(false));
    }
}
