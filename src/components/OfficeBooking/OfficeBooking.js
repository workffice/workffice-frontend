import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect } from 'react';
import Datetime from 'react-datetime';
import { useLocation } from 'react-router';
import {
    Badge,
    Button, Card, CardFooter, CardHeader, CardTitle, Col, Form,
    FormGroup, Input, Label, Row
} from 'reactstrap';
import { Cloudinary } from '../Common/Cloudinary/Cloudinary';
import { Notification } from '../Common/Notification/Notification';
import './styles/OfficeBookingStyle.css';

export const OfficeBooking = ({
    officeNotFound,
    office,
    loadOffice,
    notification,
    hideNotification,
    inactivities,
    loadInactivities,
    createBooking,
}) => {
    const query = new URLSearchParams(useLocation().search)
    useEffect(() => {
        if (query.get("id"))
            loadOffice(query.get("id"))
    }, [])
    useEffect(() => {
        if (query.get("id"))
            loadInactivities(query.get("id"))
    }, [])
    useEffect(() => {
        if (notification.show)
            setTimeout(() => {
                hideNotification()
            }, 2500)
    }, [notification.show])

    const validate = values => {
        const errors = {};
        if (!values.date)
            errors.date = 'Requerido.';
        if (!values.startTime)
            errors.startTime = 'Requerido.';
        if (!values.endTime)
            errors.endTime = 'Requerido.';
        if (!values.numberOfAssistants)
            errors.numberOfAssistants = 'Requerido.';
        if (values.endTime.hours() - values.startTime.hours() <= 0)
            errors.invalidTimeRange = 'La hora de ingreso debe ser previa a la hora de salida'
        return errors;
    };


    const formik = useFormik({
        initialValues: {
            date: moment(),
            startTime: moment().hour(8),
            endTime: moment().hour(9),
            numberOfAssistants: 0,
        },
        validate,
        onSubmit: async ({ date, startTime, endTime, numberOfAssistants }) => {
            const start = startTime.hours() < 10 ? "0" + startTime.hours() : startTime.hours()
            const end = endTime.hours() < 10 ? "0" + endTime.hours() : endTime.hours()
            const booking = {
                startTime: `${date.year()}-${date.month() + 1}-${date.date()}T${start}:00:00`,
                endTime: `${date.year()}-${date.month() + 1}-${date.date()}T${end}:00:00`,
                attendeesQuantity: numberOfAssistants
            }
            createBooking(office.id, booking)
        },
    });


    const renderBookingForm = () => {
        return (
            <>
                <Row style={{ display: 'grid', paddingTop: 40 }}>
                    <Col xs="12" md="6" lg="12" xg="12">
                        <h1>
                            Alquilar <small color="red">oficina A</small>
                        </h1>
                        <hr />
                    </Col>
                </Row>
                <Notification
                    isError
                    message="Oops algo salio mal"
                    show={notification.show && notification.isError}
                    hideNotification={hideNotification}
                />
                <Notification
                    message="La reserva se creo correctamente"
                    show={notification.show && notification.isSuccess}
                    hideNotification={hideNotification}
                />
                <Card>
                    <Row>
                        <Col>
                            <Form onSubmit={formik.handleSubmit} style={{ padding: "5%" }}>
                                <FormGroup className={formik.errors.date ? 'has-danger' : ''}>
                                    <Label htmlFor="date" className="label-form">Fecha</Label>
                                    <FormGroup>
                                        <Datetime
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
                                </FormGroup>

                                <Row>
                                    <Col md="6">
                                        <Label htmlFor="startTime" className="label-form">Hora ingreso</Label>
                                        <FormGroup className={formik.errors.startTime ? 'has-danger' : ''}>
                                            <Datetime
                                                name="startTime"
                                                id="startTime"
                                                initialValue={formik.values.startTime}
                                                onChange={value => formik.setFieldValue("startTime", value)}
                                                dateFormat={false}
                                                timeFormat="HH"
                                                input={false}
                                                timeConstraints={{ hours: { min: 8, max: 17 } }}
                                                inputProps={{ placeholder: "Seleccione la hora de ingreso" }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <FormGroup className={formik.errors.endTime ? 'has-danger' : ''}>
                                            <Label htmlFor="endTime" className="label-form">Hora salida</Label>
                                            <Datetime
                                                name="endTime"
                                                id="endTime"
                                                initialValue={formik.values.endTime}
                                                onChange={value => formik.setFieldValue("endTime", value)}
                                                dateFormat={false}
                                                timeFormat="HH"
                                                input={false}
                                                timeConstraints={{ hours: { min: 9, max: 18 } }}
                                                inputProps={{ placeholder: "Seleccione la hora de salida" }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                {formik.errors.invalidTimeRange ? <Label className="text-danger">{formik.errors.invalidTimeRange}</Label> : <></>}


                                <FormGroup className={formik.errors.numberOfAssistants ? 'has-danger' : ''}>
                                    <Label htmlFor="numberOfAssistants" className="label-form">Cantidad de personas</Label>
                                    <Input
                                        type="number"
                                        placeholder="Ingrese el número de personas..."
                                        name="numberOfAssistants"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        min={1}
                                        value={formik.values.numberOfAssistants}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    {
                                        office
                                            ? <Label className="label-form">
                                                {` Precio total $ ${office.price * (formik.values.endTime.hours() - formik.values.startTime.hours())}`}
                                            </Label>
                                            : <Label className="label-form">
                                                Precio total $
                                            </Label>
                                    }

                                </FormGroup>
                                <Row>
                                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            className="btn-round btn-primary"
                                            color="primary"
                                            type="submit"
                                            disabled={formik.isSubmitting}>
                                            Alquilar Oficina
                                        </Button>
                                        <Button
                                            type="reset"
                                            className="btn-round btn-info"
                                            color="info"
                                            disabled
                                        >
                                            Pagar
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col style={{ padding: "5%" }}>
                            <Cloudinary publicId={office ? office.imageUrl : ""} height="300" width="200" />
                            <CardHeader>
                                <CardTitle>
                                    {office ? office.name : ""}
                                </CardTitle>
                            </CardHeader>
                            <CardFooter>
                                {inactivities && inactivities.map(inactivity => <Badge key={inactivity.id} color="info">{inactivity.dayOfWeek}</Badge>)}
                            </CardFooter>
                        </Col>
                    </Row>
                </Card>
            </>
        )
    }

    return (
        <div className="content">
            {
                officeNotFound ? <h1>La oficina que quiere reservar no existe </h1> : renderBookingForm()
            }
        </div>
    );
}
