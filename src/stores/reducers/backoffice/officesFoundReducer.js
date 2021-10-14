import { SEARCH_OFFICES } from "../../actions/backoffice/officesFoundAction";

const initialState = [];

export const officesFoundReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_OFFICES:
            return payload;
        default:
            return state;
    }
}
