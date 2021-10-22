import { BOOK_OFFICE, CREATE_MERCADO_PAGO_PREFERENCE } from "../../actions/booking/bookingActions";

export const bookingReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case (BOOK_OFFICE): return ({ id: payload })
        default: return state
    }
}


export const mercadoPagoPreferenceReducer = (state = null, { type, payload }) => {
    switch (type) {
        case (CREATE_MERCADO_PAGO_PREFERENCE): return payload
        default: return state
    }
}