import { setIsLoading } from "../..";
import { createOfficeAPI, deleteOfficeAPI, getOfficeAPI, updateOfficeAPI } from "../../../../api/backoffice/offices";
import { OFFICE_ENTITY, setFoundEntity, setNotFoundEntity } from '../../errors/notFoundActions';
import { setErrorAction, setSuccessAction } from "../../notifications/writeNotificationActions";
import { loadingOfficeAction, stopLoadingOfficeAction } from "./loadingActions";
import { fetchOfficesList } from "./officesActions";

export const CREATE_OFFICE = 'CREATE_OFFICE';
export const FETCH_OFFICE = 'FETCH_OFFICE';
export const UPDATE_OFFICE = 'UPDATE_OFFICE';
export const DELETE_OFFICE = 'DELETE_OFFICE';

export const newOffice = office => ({
    type: CREATE_OFFICE,
    payload: office
});

export const createOffice = (officeBranchId, office) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(newOffice(await createOfficeAPI(officeBranchId, office)));
        dispatch(fetchOfficesList(officeBranchId))
        dispatch(setSuccessAction())
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const getOfficeAction = office => ({
    type: FETCH_OFFICE,
    payload: office
});

export const getOffice = officeId => async dispatch => {
    dispatch(loadingOfficeAction())
    try {
        dispatch(getOfficeAction(await getOfficeAPI(officeId)))
        dispatch(setFoundEntity(OFFICE_ENTITY))
    } catch (error) {
        dispatch(setNotFoundEntity(OFFICE_ENTITY))
    } finally {
        dispatch(stopLoadingOfficeAction())
    }
}

export const updateOfficeAction = office => ({
    type: UPDATE_OFFICE,
    payload: office
});

export const updateOffice = (officeId, office) => async dispatch => {
    try {
        dispatch(updateOfficeAction(await updateOfficeAPI(officeId, office)))
        dispatch(setSuccessAction())
        dispatch(getOfficeAction(await getOfficeAPI(officeId)))
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}
export const deleteOfficeAction = office => ({
    type: DELETE_OFFICE,
    payload: office
});

export const deleteOffice = (officeId, office) => async dispatch => {
    try {
        dispatch(deleteOfficeAction(await deleteOfficeAPI(officeId, office)))
        dispatch(setSuccessAction())
        dispatch(getOfficeAction(await getOfficeAPI(officeId)))
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}
