import { FETCH_COLLABORATORS } from "../../../actions/backoffice/collaborator/collaboratorsAction"
import { CREATE_COLABORATOR, UPDATE_COLABORATOR } from "../../../actions/backoffice/collaborator/collaboratorAction"

const initialState = null

export const collaboratorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COLLABORATORS:
            return [...payload]
        case CREATE_COLABORATOR:
            return state
        case UPDATE_COLABORATOR:
            return state
        default:
            return state
    }
}
