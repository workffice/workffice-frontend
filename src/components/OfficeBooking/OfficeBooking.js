import { useFormik } from 'formik';
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

export const OfficeBooking = ({ office, loadOffice, notification, hideNotification, inactivities, loadInactivities }) => {
    const query = new URLSearchParams(useLocation().search)
    useEffect(() => {
        loadOffice(query.get("id"))
    }, [])
    useEffect(() => {
        loadInactivities(query.get("id"))
    }, [])

    const validate = values => {
        const errors = {};
        if (!values.date) {
            errors.date = 'Requerido.';
        }
        if (!values.startTime) {
            errors.startTime = 'Requerido.';
        }
        if (!values.endTime) {
            errors.endTime = 'Requerido.';
        }
        if (!values.numberOfAssistants) {
            errors.numberOfAssistants = 'Requerido.';
        }
        return errors;
    };


    const formik = useFormik({
        initialValues: {
            date: null,
            startTime: null,
            endTime: null,
            numberOfAssistants: 0,
        },
        validate,
        onSubmit: async ({ date, startTime, endTime, numberOfAssistants }) => {
            const booking = {
                startTime: `${date._d.getFullYear()}-${date._d.getMonth() + 1}-${date._d.getDate()}T${startTime._d.getHours()}:00:00`,
                endTime: `${date._d.getFullYear()}-${date._d.getMonth() + 1}-${date._d.getDate()}T${endTime._d.getHours()}:00:00`,
                attendeesQuantity: numberOfAssistants
            }
            console.log(booking)
        },
    });

    const price = 500;
    const hour = 5;


    return (
        <div className="content">
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
                                        name="date"
                                        id="date"
                                        onChange={value => formik.setFieldValue("date", value)}
                                        timeFormat={false}
                                        inputProps={{ placeholder: "Seleccione una fecha" }}
                                    />
                                </FormGroup>
                            </FormGroup>

                            <FormGroup className={formik.errors.date ? 'has-danger' : ''}>
                                <Label htmlFor="startTime" lassName="label-form">Hora desde</Label>
                                <FormGroup>
                                    <Datetime
                                        name="startTime"
                                        id="startTime"
                                        onChange={value => formik.setFieldValue("startTime", value)}
                                        dateFormat={false}
                                        inputProps={{ placeholder: "Seleccione la hora de ingreso" }}
                                    />
                                </FormGroup>
                            </FormGroup>

                            <FormGroup className={formik.errors.date ? 'has-danger' : ''}>
                                <Label htmlFor="endTime" className="label-form">Hora hasta</Label>
                                <FormGroup>
                                    <Datetime
                                        name="endTime"
                                        id="endTime"
                                        onChange={value => formik.setFieldValue("endTime", value)}
                                        dateFormat={false}
                                        inputProps={{ placeholder: "Seleccione la hora de egreso" }}
                                    />
                                </FormGroup>
                            </FormGroup>

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
                                <Label className="label-form">{` Precio total $ ${price * hour}`} </Label>
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
                            {inactivities && inactivities.map(inactivity => <Badge color="info">{inactivity.dayOfWeek}</Badge>)}
                        </CardFooter>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
