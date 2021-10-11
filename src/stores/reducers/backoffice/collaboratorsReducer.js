import { FETCH_COLLABORATORS } from "../../actions/backoffice/collaboratorsAction";

const initialState = null;

export const collaboratorsReducer = (state = initialState, { type, payload }) => {
    let currentState = state;
    switch (type) {
        case FETCH_COLLABORATORS:
            return currentState = payload;
        default:
            return currentState;
    }
}
