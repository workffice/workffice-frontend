import { UPDATE_USER } from "../../actions/backoffice/userActions";
import { FETCH_ME } from "../../actions/backoffice/userActions";


const initialState = null;

export const userMeReducer = (state = initialState, { type, payload }) => {
    let currentState = state;
    switch (type) {
        case FETCH_ME:
            return currentState = payload
        case UPDATE_USER:
            return currentState
        default:
            return currentState;
    }
}
