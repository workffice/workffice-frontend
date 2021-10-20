import { setIsLoading } from "../..";
import { createOfficeAPI } from "../../../../api/backoffice/offices";
import { setErrorAction, setSuccessAction } from "../../notifications/writeNotificationActions";
import { fetchOfficesList } from "./officesActions";

export const CREATE_OFFICE = 'CREATE_OFFICE';

export const newOffice = office => ({
    type: CREATE_OFFICE,
    payload: office
});

export const createOffice = (officeBranchId, office) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        dispatch(newOffice(await createOfficeAPI(officeBranchId, office)));
        dispatch(fetchOfficesList(officeBranchId))
        dispatch(setSuccessAction())
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}
