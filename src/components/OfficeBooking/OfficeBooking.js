import { useFormik } from 'formik';
import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Button,
    Form,
    FormGroup,
    Label,
    CardHeader,
    Alert,
    Container,
    CardTitle,
} from 'reactstrap';
import './styles/OfficeBookingStyle.css';
import Datetime from 'react-datetime';

export const OfficeBooking = (props) => {
    const validate = values => {
        const errors = {};
        if (!values.date) {
            errors.date = 'Requerido.';
        }
        if (!values.timeFrom) {
            errors.timeFrom = 'Requerido.';
        }
        if (!values.timeTo) {
            errors.timeTo = 'Requerido.';
        }
        if (!values.numberOfAssistants) {
            errors.numberOfAssistants = 'Requerido.';
        }
        return errors;
    };


    const formik = useFormik({
        initialValues: {
            date: null,
            timeFrom: null,
            timeTo: null,
            numberOfAssistants: 0,
        },
        validate,
        onSubmit: async (values) => {
            console.log('values', values)
            const office = { ...values }
            props.create(office);
        },
    });


    // React.useEffect(() => {
    //     if (props.office !== null) {
    //         history.push('/admin/offices');
    //     }
    // }, [props.office]);

    // React.useEffect(() => {
    //     if (notification.show) {
    //         setTimeout(() => {
    //             dispatch(hideNotification());
    //         }, 2500);
    //     }
    // }, [notification]);

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

            <Container>
                <Form onSubmit={formik.handleSubmit} >
                    <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <CardHeader>
                            {
                                <Alert
                                    // isOpen={notification.show && notification.isError}
                                    color="danger"
                                    fade={false}
                                >
                                    {'Ocurrió un error. Intente nuevamente'}
                                </Alert>
                            }
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.date ? 'has-danger' : ''}>
                                        <CardTitle className="label-form">Fecha</CardTitle>
                                        <FormGroup>
                                            <Datetime
                                                timeFormat={false}
                                                inputProps={{ placeholder: "Seleccione una fecha" }}
                                            />
                                        </FormGroup>
                                    </FormGroup>

                                    <FormGroup className={formik.errors.date ? 'has-danger' : ''}>
                                        <CardTitle className="label-form">Hora desde</CardTitle>
                                        <FormGroup>
                                            <Datetime
                                                dateFormat={false}
                                                inputProps={{ placeholder: "Seleccione la hora de ingreso" }}
                                            />
                                        </FormGroup>
                                    </FormGroup>

                                    <FormGroup className={formik.errors.date ? 'has-danger' : ''}>
                                        <CardTitle className="label-form">Hora hasta</CardTitle>
                                        <FormGroup>
                                            <Datetime
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
                                        <Label className="label-form">{` Precio total $ ${price*hour}`} </Label>
                                    </FormGroup> 
                                </Col>    

                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    {/* <OfficeComponent office={office} officeBranch={branch} /> */}
                                </Col>
                            </Row>

                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        className="btn btn-primary"
                                        color="primary"
                                        type="submit"
                                        disabled={formik.isSubmitting}>
                                        Alquilar Oficina
                                    </Button>
                                    <Button
                                        type="reset"
                                        className="btn btn-primary"
                                        color="danger"
                                        style={{ backgroundColor: '#EB5D60', minWidth: 107 }}
                                    >
                                        Cancelar
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Form>
            </Container>
        </div>
    );
}
