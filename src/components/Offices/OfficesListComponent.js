import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { EmptyComponent } from '../Empty/EmptyComponent';
import { OfficeComponent } from './OfficeComponent';

export const OfficesListComponent = (props) => {
  const { offices, branch } = props;
  return (
    <div className="content">
      <Row style={{ display: 'grid', paddingTop: 40 }}>
        <Col xs="12" md="6" lg="12" xg="12">
          <h1>
            Gestionar <small color="red">oficinas</small>
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
          <Button className="btn-round" color="primary">
            <Link to="/admin/new-office" style={{ color: 'white', textDecoration: 'none' }}>
              {' '}
              <i className="fa fa-plus" /> Nueva Oficina
            </Link>
          </Button>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        {offices ? props.offices.data.map((office) => {
          return <Col xs="10" md="4" lg="4" xg="4">
            <OfficeComponent office={office} officeBranch={branch.data} />
          </Col>
        }) : <EmptyComponent />

        }

      </Row>
    </div >
  );
}