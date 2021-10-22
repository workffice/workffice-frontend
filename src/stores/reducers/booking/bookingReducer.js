import { BOOK_OFFICE } from "../../actions/booking/bookingActions";

export const bookingReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case (BOOK_OFFICE): return ({ id: payload })
        default: return state
    }
}
