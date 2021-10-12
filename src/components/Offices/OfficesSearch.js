import React from 'react'
import { useFormik } from 'formik';
import { Button, Col, Form, Input, Row } from 'reactstrap';
// import { OfficeRentList } from './OfficeRentList';
import { OfficeBranchCard } from '../OfficeBranch/OfficeBranchCard';

export const OfficesSearch = (props) => {
    const { officeBranches } = props;
    // let allOffices = [];
    // console.log(pagination);
    const formik = useFormik({
        initialValues: {
            office_capacity_gt: '',
            office_capacity_lt: '',
            office_type: '',
            search: ''
        },
        onSubmit: async values => {
            props.search(values)
        }
    })


    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Búscar <small color="red">oficinas</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col
                    xs="12"
                    md="12"
                    lg="12"
                    xg="12"
                >
                    <Form onSubmit={formik.handleSubmit} className="search-form" style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                        <Input
                            className="search-input"
                            type="text"
                            name='search'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.search} placeholder="Nombre de sucursal..."></Input>
                        <Input
                            className="search-input"
                            type="text"
                            name='office_type'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.office_type} placeholder="Tipo de oficinas"></Input>
                        <Input
                            className="search-input"
                            type="text"
                            name='office_capacity_gt'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.office_capacity_gt} placeholder="Capacidad desde"></Input>
                        <Input
                            className="search-input"
                            type="text"
                            name='office_capacity_lt'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.office_capacity_lt} placeholder="Capacidad hasta"></Input>
                        <Button className="btn btn-round" color="primary" type="submit">
                            Búscar
                        </Button>
                    </Form>

                </Col>
            </Row>
            <Row>
                <Col
                    xs="12"
                    md="12"
                    lg="12"
                    xg="12"
                >
                    <hr />
                    <h2>Sucursales</h2>
                    <hr />
                    <Row>
                        {officeBranches && officeBranches.data.map(officeBranch => {
                            return (
                                <>
                                    <Col xs="10" md="4" lg="4" xg="4">
                                        <OfficeBranchCard branch={officeBranch} />
                                    </Col>
                                    {/* {officeBranch.offices.length > 0 && officeBranch.offices.map(office => allOffices.push(office))} */}
                                </>
                            )
                        })}
                    </Row>

                    {/* <h2>Oficinas</h2>
                    <Row>
                        {allOffices.length > 0 && allOffices.data.map(office => {
                            return (
                                <>
                                    <Col xs="10" md="4" lg="4" xg="4">
                                        <OfficeRentList office={office} branch={{}} />
                                    </Col>
                                </>
                            )
                        })}
                    </Row> */}
                </Col>
            </Row>
        </div >
    );
}
