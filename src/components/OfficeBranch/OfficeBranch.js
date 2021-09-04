import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { OfficeBranchCard } from './OfficeBranchCard';

export const OfficeBranch = () => (
  <div className="content">
    <Row style={{ display: 'grid', paddingTop: 40 }}>
      <Col xs="6" md="6" lg="12" xg="12">
        <h1>
          Gestionar <small color="red">sucursales</small>
        </h1>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col
        xs="6"
        md="6"
        lg="12"
        xg="12"
        style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button className="btn-round" color="primary" size="medium" >
          <Link to="/admin/colaborators" style={{ color: 'white', textDecoration: 'none' }}>
            {' '}
            <i className="fa fa-plus" />
            {' '}Colaborador
          </Link>
        </Button>
        <Button className="btn-round" color="primary">
          <Link to="/admin/new-office-branch" style={{ color: 'white', textDecoration: 'none' }}>

            {' '}
            <i className="fa fa-plus" /> Nueva Sucursal
          </Link>
        </Button>
      </Col>
    </Row>

    <Row>
      <Col xs="10" md="4" lg="4" xg="4">
        <OfficeBranchCard />
      </Col>
      <Col xs="10" md="4" lg="4" xg="4">
        <OfficeBranchCard />
      </Col>
      <Col xs="10" md="4" lg="4" xg="4">
        <OfficeBranchCard />
      </Col>
    </Row>
  </div>
);
