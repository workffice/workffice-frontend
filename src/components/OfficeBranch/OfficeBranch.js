import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { OfficeBranchCard } from './OfficeBranchCard'

export const OfficeBranch = () => {
    return (
        <div className="content">
            <Row style={{ display: 'grid' }}>
                <Col xs="6" md="6" lg="12" xg="12">
                    <h1>Gestionar <small color="red">sucursales</small></h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs="6" md="6" lg="12" xg="12" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button className="btn-round"
                        color="primary"
                        size="medium"
                    > <i className="fa fa-plus"></i> Nuevo colaborador</Button>
                    <Button className="btn-round"
                        color="primary"
                    > <i className="fa fa-plus"></i> Nueva Sucursal</Button>
                </Col>
            </Row>

            <Row>
                <Col  xs="10" md="4" lg="4" xg="4">
                    <OfficeBranchCard />
                </Col>
                <Col  xs="10" md="4" lg="4" xg="4">
                    <OfficeBranchCard />
                </Col>
                <Col  xs="10" md="4" lg="4" xg="4">
                    <OfficeBranchCard />
                </Col>
            </Row>

        </div >
    )
}
