import { SEARCH_OFFICES } from "../../actions/backoffice/officesFoundAction";

const initialState = {};

export const officesFoundReducer = (state = initialState, { type, payload }) => {

    let currentState = state;
    switch (type) {
        case SEARCH_OFFICES:
            return currentState = payload;
        default:
            return currentState;
    }
}