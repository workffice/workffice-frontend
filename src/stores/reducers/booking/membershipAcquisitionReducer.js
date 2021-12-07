import { ACQUIRE_MEMBERSHIP, FETCH_MEMBERSHIP_ACQUISITIONS } from "../../actions/booking/membershipAcquisitionActions"

export const membershipAcquisitionReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case (ACQUIRE_MEMBERSHIP): return ({ id: payload })
        default: return state
    }
}


export const membershipAcquisitionsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case (FETCH_MEMBERSHIP_ACQUISITIONS): return payload
        default: return state
    }
}
