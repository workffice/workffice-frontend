import { setIsLoading } from "..";
import { fetchCollaboratorsApi } from "../../../api/backoffice/collaborator";
import { setForbiddenAccessAction, setSuccessAccess } from "../auth/permissionActions";

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
        dispatch(setSuccessAccess("collaborator"))
    } catch (error) {
        if (error.code === "FORBIDDEN")
            dispatch(setForbiddenAccessAction("collaborator"))
    } finally {
        dispatch(setIsLoading(false));
    }

}