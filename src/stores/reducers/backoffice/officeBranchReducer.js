import { CLEAN_OFFICE_BRANCH, CREATE_OFFICE_BRANCH, FETCH_EDIT_OFFICEBRANCH, FETCH_OFFICEBRANCH_ID, FETCH_OFFICE_BRANCH_SEARCH } from "../../actions/backoffice/officeBranchActions";

const initialState = null

export const officeBranchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_OFFICE_BRANCH:
            return state;
        case FETCH_OFFICEBRANCH_ID:
            return payload;
        case FETCH_EDIT_OFFICEBRANCH:
            return state;
        case CLEAN_OFFICE_BRANCH:
            return null;
        default:
            return state;
    }
}

export const officeBranchSearchReducer = (state = null, {type, payload}) => {
    switch (type) {
        case FETCH_OFFICE_BRANCH_SEARCH:
            return payload;
        default: return state
    }
}
