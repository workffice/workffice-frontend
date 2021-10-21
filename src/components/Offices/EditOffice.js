import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Col, Container, Row } from 'reactstrap';
import { Loading } from '../Common/Loading/Loading';
import { OfficeForm } from './OfficeForm';
import './styles/OfficeStyle.css';

export const EditOffice = ({ office, loadOffice, loading }) => {
    const query = new URLSearchParams(useLocation().search)
    useEffect(() => {
        loadOffice(query.get("id"))
    }, [])
    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Editar oficina <small color="red">{office ? office.name : ""}</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            {
                loading ? <Container><Row><Col md="12"><Loading /></Col></Row></Container> :
                    <>
                        <OfficeForm
                            office={office}
                            onSubmit={officeFormData => console.log(officeFormData)}
                        />
                    </>
            }
        </div>
    )
}
