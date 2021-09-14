import { setError, setIsLoading } from "..";
import { createOfficeBranchAPI, officeBranchListAPI } from "../../../api/backoffice/officeBranch";


export const FETCH_CREATE_OFFICEBRANCH = 'FETCH_CREATE_OFFICEBRANCH';
export const FETCH_OFFICEBRANCHES_LIST = 'FETCH_OFFICEBRANCHES_LIST';

export const fetchCreateOfficebranch = officeBranchData => {
    return {
        type: FETCH_CREATE_OFFICEBRANCH,
        payload: officeBranchData
    }
};

export const createOfficeBranch = (officeBranchData, userId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(fetchCreateOfficebranch(await createOfficeBranchAPI(officeBranchData, userId)));
    } catch (error) {
        await dispatch(setError(error));
    } finally {
        await dispatch(officeBranchList(userId));
        dispatch(setIsLoading(false));
    }

}
export const fetchOfficeBranchesList = userId => {
    console.log("hola", userId)
    return {
        type: FETCH_OFFICEBRANCHES_LIST,
        payload: userId
    }
};

export const officeBranchList = (userId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(fetchOfficeBranchesList(await officeBranchListAPI(userId)));
    } catch (error) {
        await dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }

}