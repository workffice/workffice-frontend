import { setError, setIsLoading } from "..";
import { createOfficeBranchAPI, editOfficeBranchAPI, getOfficeBranchIdAPI, officeBranchListAPI } from "../../../api/backoffice/officeBranch";


export const FETCH_CREATE_OFFICEBRANCH = 'FETCH_CREATE_OFFICEBRANCH';
export const FETCH_EDIT_OFFICEBRANCH = 'FETCH_EDIT_OFFICEBRANCH';
export const FETCH_OFFICEBRANCHES_LIST = 'FETCH_OFFICEBRANCHES_LIST';
export const FETCH_OFFICEBRANCH_ID = 'FETCH_OFFICEBRANCH_ID';

export const fetchCreateOfficebranch = officeBranchData => {
    return {
        type: FETCH_CREATE_OFFICEBRANCH,
        payload: officeBranchData
    }
};

export const createOfficeBranch = (officeBranchData, userId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchCreateOfficebranch(await createOfficeBranchAPI(officeBranchData, userId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(officeBranchList(userId));
        dispatch(setIsLoading(false));
    }

}

export const fetchOfficeBranchesList = userId => {
    return {
        type: FETCH_OFFICEBRANCHES_LIST,
        payload: userId
    }
};

export const officeBranchList = (userId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchOfficeBranchesList(await officeBranchListAPI(userId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }

}

export const fetchEditOfficebranch = officeBranchData => {
    return {
        type: FETCH_EDIT_OFFICEBRANCH,
        payload: officeBranchData
    }
};

export const editOfficeBranch = (userId, officeBranchData) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchEditOfficebranch(await editOfficeBranchAPI(officeBranchData, userId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(officeBranchList(userId));
        dispatch(setIsLoading(false));
    }
}
export const fetchOfficebranchId = officeBranch => {
    return {
        type: FETCH_OFFICEBRANCH_ID,
        payload: officeBranch
    }
};

export const getOfficeBranchId = (id) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchOfficebranchId(await getOfficeBranchIdAPI(id)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}


