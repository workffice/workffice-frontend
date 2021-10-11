import { setError, setIsLoading } from "..";
import { fetchCollaboratorsApi } from "../../../api/colaborator";

export const FETCH_COLLABORATORS = 'FETCH_COLLABORATORS';


export const fetchCollaboratorsList = collaborators => {
    return {
        type: FETCH_COLLABORATORS,
        payload: collaborators
    }
};

export const collaboratorsList = (officeBranchId) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(fetchCollaboratorsList(await fetchCollaboratorsApi(officeBranchId)));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setIsLoading(false));
    }

}