import { useFormik } from 'formik';
import { uniqueId } from 'lodash-es';
import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Select from 'react-select';
import {
    Badge, Card, CardBody, CardHeader, CardTitle, Col, Form,
    Row, Table
} from "reactstrap";
import { monthDataReport } from '../../utils/filters.js';
import { chartExample1 } from "../../variables/charts.js";
import { DashboardRowTable } from './DashboardRowTable.jsx';

export const DashboardIncomeStatistics = ({
    monthFilter,
    yearFilter,
    revenuePerOffice,
    revenuePerMonth,
    loadRevenuePerMonth,
    loadRevenuePerOffice,
    offices,
}) => {
    const date = new Date()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const reportOfficeRow = () => {
        if (revenuePerOffice.length > 0 && offices.length > 0) {
            return revenuePerOffice.map(office => {
                let officeFound = offices.find(oFound => oFound.id == office.officeId)
                const officeData = { ...office, name: officeFound.name };
                return officeData;
            })
        }
    }
    const totalAmountPerOffice = () => {
        if (revenuePerOffice.length > 0 && offices.length > 0) {
            let total = 0;
            revenuePerOffice.forEach(office => {
                return total += parseInt(office.totalAmount);
            })
            return total;
        }
    }
    const total = () => {
        if (revenuePerMonth.length > 0) {
            return revenuePerMonth.reduce((prevValue, currentValue) => {
                return prevValue += currentValue.totalAmount;
            }, 0);
        }
    }
    const data = () => {
        let dataReportChart = [];
        if (revenuePerMonth.length > 0 && monthDataReport.length > 0) {
            monthDataReport.forEach(monthDR => {
                if (monthDR) {
                    let found = revenuePerMonth.find(report => report.month == monthDR.monthData)
                    found ? dataReportChart.push(monthDR.totalAmount = found.totalAmount) : dataReportChart.push(monthDR.totalAmount);
                }
            });
        }
        let chartData = chartExample1.data;
        chartData.datasets[0].data = dataReportChart;
        return chartData;
    }

    useEffect(async () => {
        loadRevenuePerOffice(monthFilter[currentMonth].value)
    }, [])
    useEffect(async () => {
        loadRevenuePerMonth(currentYear)
    }, [])

    const validate = values => {
        const errors = {};
        if (!values.year) {
            errors.year = 'Requerido.';
        }
        return errors;
    };
    const validateOffice = values => {
        const errors = {};
        if (!values.monthOffice) {
            errors.monthOffice = 'Requerido.';
        }
        return errors;
    };
    const amountOfficeForm = useFormik({
        initialValues: {
            monthOffice: monthFilter[currentMonth]
        },
        validateOffice,
        onSubmit: async (values) => {
            const month = values.monthOffice.value;
            await loadRevenuePerOffice(month);
        },
    });
    const amountYearForm = useFormik({
        initialValues: {
            year: currentYear
        },
        validate,
        onSubmit: async (values) => {
            await loadRevenuePerMonth(values.year.value)
        },
    });

    return (
        <Row>
            <Col lg="6" sm="6">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Por oficina</CardTitle>
                        <Row style={{ display: 'flex', alignContent: 'center', alignItems: 'flex-end' }}>
                            <Col sm="6">
                                <p className="card-category" style={{ color: '#34b18a' }}>Oficinas de la sucursal</p>
                            </Col>
                            <Col sm="6">
                                <Form onChange={amountOfficeForm.handleChange}>
                                    <div className="pull-right pull-right-filter" style={{ width: '70%' }}>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="monthOffice"
                                            value={amountOfficeForm.values.monthOffice}
                                            placeholder={amountOfficeForm.values.monthOffice}
                                            onChange={value => {
                                                amountOfficeForm.setFieldValue("monthOffice", value);
                                                amountOfficeForm.submitForm();
                                            }}
                                            onBlur={amountOfficeForm.handleBlur}
                                            options={monthFilter}
                                        />
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md="12">
                                <Table>
                                    <thead>
                                        <tr>
                                            <td style={{ fontWeight: 'bolder', color: '#eb5d60' }}>Oficina</td>
                                            <td className="text-right" style={{ fontWeight: 'bolder', color: '#eb5d60' }}>Monto</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reportOfficeRow() && reportOfficeRow().length &&
                                            (reportOfficeRow().map(office =>
                                                <DashboardRowTable key={uniqueId()} title={office.name} value={office.totalAmount} />
                                            ))

                                        }
                                    </tbody>
                                    <tfoot>
                                        {
                                            totalAmountPerOffice() && (
                                                <tr>
                                                    <td style={{ fontWeight: 'bolder', color: '#133148', fontSize: '22px' }}>Total</td>
                                                    <td className="text-right" style={{ fontWeight: 'bolder' }}><Badge color="success" style={{ fontSize: '20px' }}>{totalAmountPerOffice()}</Badge></td>
                                                </tr>
                                            )
                                        }


                                    </tfoot>
                                </Table>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="6" sm="6">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">
                            Por año
                        </CardTitle>
                        <Row>
                            <Col sm="6">
                                <div className="numbers pull-left">${total() ? total() : '0'}</div>
                            </Col>
                            <Col sm="6">
                                <div className="pull-right pull-right-filter" style={{ width: '50%' }}>
                                    <Select
                                        className="react-select primary"
                                        classNamePrefix="react-select"
                                        name="year"
                                        value={amountYearForm.values.year}
                                        placeholder={amountYearForm.values.year}
                                        onChange={value => {
                                            amountYearForm.setFieldValue("year", value)
                                            amountYearForm.submitForm();
                                        }}
                                        closeMenuOnSelect={true}
                                        options={yearFilter}

                                    />
                                </div>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <h6 className="big-title">
                            Total ingresos mensuales
                        </h6>
                        {
                            <Line
                                data={data}
                                options={chartExample1.options}
                                height={180}
                                width={626}
                            />
                        }

                    </CardBody>
                </Card>
            </Col>

        </Row >
    )
}
