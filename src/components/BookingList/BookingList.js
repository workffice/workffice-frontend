import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect } from 'react';
import ReactDatetimeClass from 'react-datetime';
import {
    Col, Form,
    FormGroup, Label, Row
} from 'reactstrap';
import { BookingListComponent } from './BookingListComponent';

export const BookingList = ({ user, bookings, loadBookings }) => {

    const validate = values => {
        const errors = {};
        if (!values.date)
            errors.date = 'Requerido.';
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            date: moment(),
        },
        validate,
        onSubmit: async ({ date }) => {
            console.log(date);
        }
    })
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
                        Listado de <small color="#EB5D60">reservas</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Form onSubmit={formik.handleSubmit}>
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
            </Form>
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
                        transactionAmount={booking.paymentInformation ? booking.paymentInformation.transactionAmount : "No definido"}
                        providerFee={booking.paymentInformation ? booking.paymentInformation.providerFee : "No definido"}
                        currency={booking.paymentInformation ? booking.paymentInformation.currency : "No definido"}
                        paymentMethodId={booking.paymentInformation ? booking.paymentInformation.paymentMethodId : "No definido"}
                        paymentTypeId={booking.paymentInformation ? booking.paymentInformation.paymentTypeId : "No definido"}
                        officeBranchId={booking.officeBranchId}
                    />
                })
            }
            <BookingListComponent
                officeName="Oficina número 1"
                id="0cfad0be-69e9-469a-85e5-803507516fc7"
                status="SCHEDULED"
                attendeesQuantity={5}
                created="05/10/1996"
                startTime="05:30"
                endTime="14:20"
                transactionAmount={1000}
                providerFee={200}
                currency="ARS"
                paymentMethodId="master"
                paymentTypeId="tarjeta de crédito"
                officeBranchName="Whale"
            />
            <BookingListComponent
                officeName="Oficina número 1"
                id="0cfad0be-69e9-469a-85e5-803507516fc7"
                status="PENDING"
                attendeesQuantity={5}
                created="05/10/1996"
                startTime="05:30"
                endTime="14:20"
                transactionAmount={1000}
                providerFee={200}
                currency="ARS"
                paymentMethodId="master"
                paymentTypeId="tarjeta de crédito"
                officeBranchName="Whale"
            />
            <BookingListComponent
                officeName="Oficina número 1"
                id="0cfad0be-69e9-469a-85e5-803507516fc7"
                status="CANCELLED"
                attendeesQuantity={5}
                created="05/10/1996"
                startTime="05:30"
                endTime="14:20"
                transactionAmount={1000}
                providerFee={200}
                currency="ARS"
                paymentMethodId="master"
                paymentTypeId="tarjeta de crédito"
                officeBranchName="Whale"
            />
        </div >
    )
}
