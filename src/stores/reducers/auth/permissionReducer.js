import { set } from "lodash"
import { SET_FORBIDDEN_ACCESS, SET_SUCCESS_ACCESS } from "../../actions/auth/permissionActions"

export const permissionReducer = (state = { isForbidden: false, resources: [] }, { type, payload }) => {
    switch (type) {
        case SET_SUCCESS_ACCESS: return {
            isForbidden: state.isForbidden,
            resources: state.resources.filter(resource => resource !== payload)
        }
        case SET_FORBIDDEN_ACCESS: return {
            isForbidden: true,
            resources: set([...state.resources, payload])
        }
        default: return state
    }
}
