import { FETCH_AMOUNT_PER_OFFICE, FETCH_AMOUNT_PER_YEAR, FETCH_OFFICE_BOOKING } from "../../actions/backoffice/reports/reportsActions";

const initialState = {
    reports: {
        reportPerOffice: [],
        reportOfficeYear: [],
        reportOfficeBooking: [],
    }
};

export const reportsReducer = (state = initialState, { type, payload }) => {
    let currentState = state;
    switch (type) {
        case FETCH_AMOUNT_PER_OFFICE:
            currentState.reports.reportPerOffice = payload;
            return currentState
        case FETCH_OFFICE_BOOKING:
            currentState.reports.reportOfficeBooking = payload;
            return currentState;
        case FETCH_AMOUNT_PER_YEAR:
            currentState.reports.reportOfficeYear = payload;
            return currentState;
        default:
            return currentState;
    }
}
