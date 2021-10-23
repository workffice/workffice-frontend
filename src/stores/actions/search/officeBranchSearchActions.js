import { setIsLoading } from "..";
import { searchOfficeBranchesAPI } from "../../../api/backoffice/offices";
import { setErrorAction } from "../notifications/writeNotificationActions";

export const SEARCH_OFFICE_BRANCHES = 'SEARCH_OFFICE_BRANCHES';

export const fetchSearchOfficeBranches = offices => {
    return {
        type: SEARCH_OFFICE_BRANCHES,
        payload: offices
    }
}

export const searchOfficeBranches = params => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchSearchOfficeBranches(await searchOfficeBranchesAPI(params)))
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(setIsLoading(false))
    }
}
