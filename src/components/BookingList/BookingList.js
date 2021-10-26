// import { useFormik } from 'formik';
// import moment from 'moment';
import React, { useEffect } from 'react';
// import ReactDatetimeClass from 'react-datetime';
// import {
//     Col, Form,
//     FormGroup, Label, Row
// } from 'reactstrap';
import {
    Col, Row
} from 'reactstrap';
import { BookingListComponent } from './BookingListComponent';

export const BookingList = ({ user, bookings, loadBookings }) => {

    // const validate = values => {
    //     const errors = {};
    //     if (!values.date)
    //         errors.date = 'Requerido.';
    //     return errors;
    // };

    // const formik = useFormik({
    //     initialValues: {
    //         date: moment(),
    //     },
    //     validate,
    //     onSubmit: async ({ date }) => {
    //         console.log(date);
    //     }
    // })
    useEffect(() => {
        if (user)
            loadBookings(user.email)
    }, [user ? user.id : ""])
    const formatDate = datetime => {
        return datetime.match("(.*)T.*")[1]
    }
    const formatHour = datetime => {
        return datetime.match(".*T(.*):00")[1]
    }
    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1 >
                        Mis <small color="#EB5D60">reservas</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            {/* <Form onSubmit={formik.handleSubmit}>
                <Row style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                    <Label htmlFor="date" className="label-form" style={{ fontSize: 20 }}>Seleccione una fecha</Label>
                    <FormGroup style={{ marginLeft: 20, marginTop: 10 }}>
                        <ReactDatetimeClass
                            initialValue={formik.values.date}
                            name="date"
                            id="date"
                            onChange={value => formik.setFieldValue("date", value)}
                            timeFormat={false}
                            inputProps={{ placeholder: "Seleccione una fecha" }}
                            isValidDate={current => {
                                const yesterday = moment().subtract(1, 'day');
                                return current.isAfter(yesterday);
                            }}
                        />
                    </FormGroup>
                </Row>
            </Form> */}
            {
                bookings.map(booking => {
                    return <BookingListComponent
                        officeName={booking.officeName}
                        key={booking.id}
                        id={booking.id}
                        status={booking.status}
                        attendeesQuantity={booking.attendeesQuantity}
                        scheduleDate={formatDate(booking.startTime)}
                        startTime={formatHour(booking.startTime)}
                        endTime={formatHour(booking.endTime)}
                        transactionAmount={booking.totalAmount}
                        providerFee={booking.paymentInformation ? booking.paymentInformation.providerFee : "-"}
                        currency={booking.paymentInformation ? booking.paymentInformation.currency : "No definido"}
                        paymentMethodId={booking.paymentInformation ? booking.paymentInformation.paymentMethodId : "No definido"}
                        paymentTypeId={booking.paymentInformation ? booking.paymentInformation.paymentTypeId : "No definido"}
                        officeBranchId={booking.officeBranchId}
                    />
                })
            }
        </div >
    )
}
