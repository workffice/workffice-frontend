import React from 'react'
import { useFormik } from 'formik';
import { Button, Col, Form, Input, Row } from 'reactstrap';
import Select from 'react-select';
import { OfficeBranchCard } from '../OfficeBranch/OfficeBranchCard';
import { EmptyComponent } from '../Common/Empty/EmptyComponent';

export const OfficesSearch = (props) => {
    const { officeBranches } = props;
    React.useEffect(() => {
    }, []);
    const typesOptions = [
        {
            value: "",
            label: "Seleccione una opción",
        },
        { value: "PRIVATE", label: "Privada" },
        { value: "SHARED", label: "Compartida" },
    ];

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            officeCapacityGT: '',
            officeCapacityLT: '',
            officeType: '',
            officeBranchName: '',
        },
        onSubmit: async values => {
            const data = {
                ...values,
                officeType: values.officeType.value
            }
            await props.search(data);
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
                            name='officeBranchName'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.officeBranchName} placeholder="Nombre de sucursal..."></Input>
                        <Select
                            className="react-select primary search-input"
                            classNamePrefix="react-select"
                            name="officeType"
                            id="officeType"
                            name="officeType"
                            placeholder="Tipo de oficina"
                            onChange={value => formik.setFieldValue("officeType", value)}
                            onBlur={formik.handleBlur}
                            options={typesOptions}
                            styles={{ width: '80%' }}
                        />
                        <Input
                            className="search-input"
                            type="text"
                            name='officeCapacityGT'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.officeCapacityGT} placeholder="Capacidad desde"></Input>
                        <Input
                            className="search-input"
                            type="text"
                            name='officeCapacityLT'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.officeCapacityLT} placeholder="Capacidad hasta"></Input>
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
                        {officeBranches !== null && officeBranches.length !== 0 ? officeBranches.map(officeBranch => {
                            return (
                                <Col key={officeBranch.id} xs="10" md="4" lg="4" xg="4">
                                    <OfficeBranchCard key={officeBranch.id} branch={officeBranch} />
                                </Col>
                            )
                        }) : <EmptyComponent />}
                    </Row>
                </Col>
            </Row>
        </div >
    );
}
