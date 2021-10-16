import { FETCH_OFFICES } from "../../actions/backoffice/officesActions";


export const officesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case FETCH_OFFICES:
            return payload;
        default:
            return state;
    }
}
