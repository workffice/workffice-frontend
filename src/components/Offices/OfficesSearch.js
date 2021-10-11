import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Button, Col, Form, Input, Row } from 'reactstrap';
import { OfficeRentList } from './OfficeRentList';

export const OfficesSearch = (props) => {
    const [filters, setFilters] = useState([])
    const addFilter = (filter) => {
        setFilters([...filters,
            filter]
        );
    }

    const formik = useFormik({
        initialValues: {
            filters: [],
            search: ''
        },
        onSubmit: async values => {
            console.log(values)
            console.log(props.search(values))
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
                        {filters.length > 0 && <p>Filtros</p>}
                        <Input className="search-input" type="text" name='search' placeholder="Haz click en búscar para traer todas las oficinas"></Input>
                        <Button className="btn btn-round" color="primary">
                            Búscar
                        </Button>
                        <Button className="btn btn-round" color="danger" onClick={filter => addFilter(filter)}>
                            Filtros
                        </Button>
                    </Form>

                </Col>
            </Row>
            <Row>
                <Col>
                {
                    
                }
                    <OfficeRentList office={office}/>
                </Col>
            </Row>
        </div >
    );
}
