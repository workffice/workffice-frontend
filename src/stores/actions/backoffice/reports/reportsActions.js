import { setIsLoading } from "../..";
import { amountPerOfficeAPI, amountPerYearAPI, bookingOfficeAPI } from "../../../../api/backoffice/reports";
import { setErrorAction } from "../../notifications/writeNotificationActions";

export const FETCH_AMOUNT_PER_OFFICE = 'FETCH_AMOUNT_PER_OFFICE';
export const FETCH_OFFICE_BOOKING = 'FETCH_OFFICE_BOOKING';
export const FETCH_AMOUNT_PER_YEAR = 'FETCH_AMOUNT_PER_YEAR';

export const fetch_amount_per_office = report => ({
    type: FETCH_AMOUNT_PER_OFFICE,
    payload: report
});
export const fetch_booking_office = report => ({
    type: FETCH_OFFICE_BOOKING,
    payload: report
});
export const fetch_amount_per_year = report => ({
    type: FETCH_AMOUNT_PER_YEAR,
    payload: report
});

export const amountPerOffice = (officeBranchId, month) => async (dispatch) => {
    setIsLoading(true);
    try {
        dispatch(fetch_amount_per_office(await amountPerOfficeAPI(officeBranchId, month)));
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const amountPerYear = (officeBranchId, year) => async (dispatch) => {
    setIsLoading(true);
    try {
        dispatch(fetch_amount_per_year(await amountPerYearAPI(officeBranchId, year)));
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}


export const booking = (officeBranchId, month) => async (dispatch) => {
    setIsLoading(true);
    try {
        dispatch(fetch_booking_office(await bookingOfficeAPI(officeBranchId, month)));
    } catch (error) {
        dispatch(setErrorAction(error));
    } finally {
        dispatch(setIsLoading(false));
    }
}