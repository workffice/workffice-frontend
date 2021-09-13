import { setError, setIsLoading } from "..";
import { createOfficeBranchAPI } from "../../../api/backoffice/officeBranch";


export const FETCH_CREATE_OFFICEBRANCH = 'FETCH_CREATE_OFFICEBRANCH';

export const fetchCreateOfficebranch = officeBranchData => {
    return {
        type: FETCH_CREATE_OFFICEBRANCH,
        payload: officeBranchData
    }
};

export const createOfficeBranch = (officeBranchData) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(fetchCreateOfficebranch(await createOfficeBranchAPI(officeBranchData)));
    } catch (error) {
        await dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }

}