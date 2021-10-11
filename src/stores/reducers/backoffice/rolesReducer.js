import { FETCH_ROLES } from "../../actions/backoffice/rolesAction";

const initialState = null;

export const rolesReducer = (state = initialState, { type, payload }) => {

    let currentState = state;
    switch (type) {
        case FETCH_ROLES:
            return currentState = payload;
        default:
            return currentState;
    }
}

