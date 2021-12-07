import { ACQUIRE_MEMBERSHIP } from "../../actions/booking/membershipAcquisitionActions"

export const membershipAcquisitionReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case (ACQUIRE_MEMBERSHIP): return ({ id: payload })
        default: return state
    }
}
