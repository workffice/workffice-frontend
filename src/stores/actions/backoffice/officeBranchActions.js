import { setError, setIsLoading, setSuccess } from "..";
import { setNotFoundEntity, setFoundEntity } from "../errors/notFoundActions"
import { createOfficeBranchAPI, editOfficeBranchAPI, getOfficeBranchIdAPI, officeBranchListAPI, officeBranchListFromCollaboratorAPI } from "../../../api/backoffice/officeBranch";
import { readFromLocalStorage, writeToLocalStorage } from "../../../infra/api/localStorage";


export const CREATE_OFFICE_BRANCH = 'FETCH_CREATE_OFFICEBRANCH';
export const FETCH_EDIT_OFFICEBRANCH = 'FETCH_EDIT_OFFICEBRANCH';

export const FETCH_OFFICEBRANCHES_LIST = 'FETCH_OFFICEBRANCHES_LIST';
export const FETCH_OFFICEBRANCH_ID = 'FETCH_OFFICEBRANCH_ID';

export const FETCH_COLLABORATOR_OFFICE_BRANCHES = 'FETCH_COLLABORATOR_OFFICE_BRANCHES';

export const CLEAN_OFFICE_BRANCH = 'CLEAN_OFFICE_BRANCH'

export const FETCH_OFFICE_BRANCH_SEARCH = 'FETCH_OFFICE_BRANCH_SEARCH'

export const fetchOfficeBranchSearch = officeBranch => {
    return {
        type: FETCH_OFFICE_BRANCH_SEARCH,
        payload: officeBranch
    }
};

export const getOfficeBranchSearch = id => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(fetchOfficeBranchSearch(await getOfficeBranchIdAPI(id)))
        dispatch(setFoundEntity('officeBranch'))
    } catch (error) {
        if (error.error === 'INVALID_OFFICE_BRANCH_ID' || error.error === 'OFFICE_BRANCH_NOT_FOUND')
            dispatch(setNotFoundEntity("officeBranch"))
    } finally {
        dispatch(setIsLoading(false));
    }
}


export const cleanOfficeBranchAction = () => ({
    type: CLEAN_OFFICE_BRANCH,
})

export const fetchCreateOfficebranch = officeBranchData => {
    return {
        type: CREATE_OFFICE_BRANCH,
        payload: officeBranchData
    }
};

export const createOfficeBranch = (officeBranchData, userId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchCreateOfficebranch(await createOfficeBranchAPI(officeBranchData, userId)));
        dispatch(setSuccess())
    } catch (error) {
        dispatch(setError(error));
    } finally {
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

export const fetchCollaboratorOfficeBranches = officeBranches => {
    return {
        type: FETCH_COLLABORATOR_OFFICE_BRANCHES,
        payload: officeBranches
    }
};

export const collaboratorOfficeBranchList = collaboratorEmail => async (dispatch) => {
    try {
        dispatch(fetchCollaboratorOfficeBranches(await officeBranchListFromCollaboratorAPI(collaboratorEmail)));
    } catch (error) {
        dispatch(setError(error));
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
        dispatch(fetchOfficebranchId(await getOfficeBranchIdAPI(readFromLocalStorage("officeBranch").id)));
        dispatch(setSuccess())
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const fetchOfficebranchId = officeBranch => {
    return {
        type: FETCH_OFFICEBRANCH_ID,
        payload: officeBranch
    }
};

export const getOfficeBranchId = id => async dispatch => {
    dispatch(setIsLoading(true));
    try {
        const officeBranchResponse = await getOfficeBranchIdAPI(id)
        await dispatch(fetchOfficebranchId(officeBranchResponse))
        writeToLocalStorage(officeBranchResponse, "officeBranch")
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}
