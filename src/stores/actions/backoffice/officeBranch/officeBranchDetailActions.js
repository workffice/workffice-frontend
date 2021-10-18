import { setIsLoading } from "../../";
import { getOfficeBranchIdAPI } from "../../../../api/backoffice/officeBranch";
import { setFoundEntity, setNotFoundEntity } from "../../errors/notFoundActions";

export const FETCH_OFFICE_BRANCH_DETAIL = 'FETCH_OFFICE_BRANCH_SEARCH'

export const fetchOfficeBranchSearch = officeBranch => {
    return {
        type: FETCH_OFFICE_BRANCH_DETAIL,
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
