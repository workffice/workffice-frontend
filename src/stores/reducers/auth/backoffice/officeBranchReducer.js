import { FETCH_CREATE_OFFICEBRANCH } from "../../../actions/backoffice/officebranchActions";

const initialState = null;

export const officeBranchReducer = (state = initialState, { type, payload }) => {
    let currentState = state;
    switch (type) {
        case FETCH_CREATE_OFFICEBRANCH:
            return currentState = payload
        default:
            return currentState;
    }
}