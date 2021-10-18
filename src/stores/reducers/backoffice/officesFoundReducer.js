import { FETCH_OFFICE_BRANCH_SEARCH } from "../../actions/backoffice/officeBranch/officeBranchDetailActions";

const initialState = [];

export const officesFoundReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_OFFICE_BRANCH_SEARCH:
            return payload;
        default:
            return state;
    }
}
