import { setIsLoading } from "../..";
import { createOfficeAPI } from "../../../../api/backoffice/offices";
import { setErrorAction } from "../../notifications/writeNotificationActions";
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
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(fetchOfficesList(officeBranchId))
        dispatch(setIsLoading(false));
    }
}
