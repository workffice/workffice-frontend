import { setError, setIsLoading } from "..";
import { fetchRolesApi } from "../../../api/backoffice/roles";

export const FETCH_ROLES = 'FETCH_ROLES';


export const fetchRolesList = roles => {
    return {
        type: FETCH_ROLES,
        payload: roles
    }
};

export const rolesList = (officeBranchId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchRolesList(await fetchRolesApi(officeBranchId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }

}