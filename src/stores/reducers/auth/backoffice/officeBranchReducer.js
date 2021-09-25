import { FETCH_CREATE_OFFICEBRANCH, FETCH_OFFICEBRANCHES_LIST } from "../../../actions/backoffice/officebranchActions";

const initialState = null;

export const officeBranchReducer = (state = initialState, { type, payload }) => {
    let currentState = state;
    switch (type) {
        case FETCH_CREATE_OFFICEBRANCH:
            return currentState;
        case FETCH_OFFICEBRANCHES_LIST:
            return currentState = payload;
        default:
            return currentState;
    }
}

