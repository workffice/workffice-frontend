import { setIsLoading } from "..";
import { searchOfficesAPI } from "../../../api/backoffice/offices";
import { setErrorAction } from "../notifications/writeNotificationActions";

export const SEARCH_OFFICES = 'SEARCH_OFFICES';

export const searchOffices = offices => {
    return {
        type: SEARCH_OFFICES,
        payload: offices
    }
}

export const searchAllOffices = params => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(searchOffices(await searchOfficesAPI(params)))
    } catch (error) {
        dispatch(setErrorAction(error));
    }finally{
        dispatch(setIsLoading(false))
    }
}