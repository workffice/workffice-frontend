import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import Select from 'react-select';
import { Card, CardHeader, CardTitle, CardBody, Col, Row, Table, Form } from 'reactstrap';
import { useSelector } from 'react-redux';
import { DashboardRowTable } from './DashboardRowTable';
import { OfficeReportDetail } from '../Offices/OfficeReportDetail';

export const DashboardOfficeBooking = (props) => {
    const date = new Date().getMonth();
    const offices = useSelector(state => state.offices);
    const { reports } = props;
    const { reportOfficeBooking } = reports;
    const { bookingOffice } = props;
    // callbacks props
    const bookingOfficeRow = () => {
        if (reportOfficeBooking.length > 0 && offices.length > 0) {
            return reportOfficeBooking.map(office => {
                let officeFound = offices.find(oFound => oFound.id == office.officeId)
                const officeData = { ...office, name: officeFound.name };
                return officeData;
            })
        }
    }
    const betterOffice = () => {
        if (offices && reportOfficeBooking.length > 0) {
            let betterOfficeBooking = null;
            reportOfficeBooking.forEach(office => {
                if (betterOfficeBooking == null) betterOfficeBooking = office;
                if (betterOfficeBooking.totalBookings < office.totalBookings) betterOfficeBooking = office;
            });

            return offices.find(office => office.id === betterOfficeBooking.officeId);
        }
    }

    useEffect(() => {
        bookingOfficeRow();
        betterOffice();
        monthSelected();
    }, [reportOfficeBooking, betterOffice])

    const validate = values => {
        const errors = {};
        if (!values.month) {
            errors.month = 'Requerido.';
        }
        return errors;
    };
    const bookingOfficeForm = useFormik({
        initialValues: {
            month: props.monthFilter[date]
        },
        validate,
        onSubmit: async (values) => {
            await bookingOffice(props.branch.id, values.month.value)
        },
    });
    const monthSelected = () => {
        const month = bookingOfficeForm.values.month.label;
        return month;
    }
    return (
        <Row>
            <Col lg="6" md="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Oficinia del mes: <small>{monthSelected()}</small></CardTitle>
                        <Row style={{ display: 'flex', alignContent: 'center', alignItems: 'flex-end' }}>
                            <Col sm="6">
                                <p className="card-category" style={{ color: '#34b18a' }}>Oficina con más reservas</p>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        {
                            betterOffice() && <OfficeReportDetail office={betterOffice()} />
                        }
                    </CardBody>
                </Card>

            </Col>
            <Col lg="6" sm="12">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Por mes</CardTitle>
                        <Row style={{ display: 'flex', alignContent: 'center', alignItems: 'flex-end' }}>
                            <Col sm="6">
                                <p className="card-category" style={{ color: '#34b18a' }}>Oficinas de la sucursal</p>
                            </Col>
                            <Col sm="6">
                                <div className="pull-right pull-right-filter" style={{ width: '50%' }}>
                                    <Form onChange={bookingOfficeForm.handleChange}>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="month"
                                            value={bookingOfficeForm.values.month}
                                            placeholder={bookingOfficeForm.values.month}
                                            onChange={value => {
                                                bookingOfficeForm.setFieldValue("month", value)
                                                bookingOfficeForm.submitForm();
                                            }}
                                            onBlur={bookingOfficeForm.handleBlur}
                                            options={props.monthFilter}

                                        />
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="12" lg="12">
                                <Table>
                                    <thead>
                                        <tr>
                                            <td style={{ fontWeight: 'bolder', color: '#eb5d60' }}>Oficina</td>
                                            <td className="text-right" style={{ fontWeight: 'bolder', color: '#eb5d60' }}>Reservas</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookingOfficeRow() && bookingOfficeRow().length &&
                                            (bookingOfficeRow().map(office => <DashboardRowTable key={office.officeId} title={office.name} value={office.totalBookings} />))
                                        }
                                    </tbody>

                                </Table>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>

        </Row>
    )
}
