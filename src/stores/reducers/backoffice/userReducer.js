import { UPDATE_USER } from "../../actions/backoffice/userActions";
import { FETCH_ME } from "../../actions/backoffice/userActions";


const initialState = null;

export const userMeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ME:
            return payload
        case UPDATE_USER:
            return state
        default:
            return state;
    }
}
