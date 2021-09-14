import { setError, setIsLoading } from "..";
import { userMeAPI } from "../../../api/backoffice/users";


export const FETCH_ME = 'FETCH_ME';

export const fetchMe = (userMe) => {
    return {
        type: FETCH_ME,
        payload: userMe
    };
};

export const getUserMe = () => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        await dispatch(fetchMe(await userMeAPI()));
    } catch (error) {
        await dispatch(setError(error));
    }
}