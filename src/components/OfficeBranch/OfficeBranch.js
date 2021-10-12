import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Alert } from 'reactstrap';
import { OfficeBranchCard } from './OfficeBranchCard';

export const OfficeBranch = ({ notification, hideNotification, userMe, loadBranches, branches }) => {
  React.useEffect(() => {
    !!userMe && loadBranches(userMe.id);
  }, [])
  return (
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
            <Link to="/admin/collaborators" style={{ color: 'white', textDecoration: 'none' }}>
              {' '}
              <i className="fa fa-plus" />
              {' '}Colaborador
            </Link>
          </Button>
          <Button className="btn-round" color="primary">
            <Link to="/admin/create-officebranch" style={{ color: 'white', textDecoration: 'none' }}>

              {' '}
              <i className="fa fa-plus" /> Nueva Sucursal
            </Link>
          </Button>
        </Col>
      </Row>
      <Alert isOpen={notification.show && notification.isSuccess} color="success">
        La sucursal se creo correctamente
        <button type="button" className="close" aria-label="Close" onClick={hideNotification}><span aria-hidden="true">×</span></button>
      </Alert>
      <Row>
        {
          branches && branches.map(branch => <>
            <Col key={branch.id} xs="10" md="4" lg="4" xg="4">
              <OfficeBranchCard key={branch.id} branch={branch} />
            </Col>
          </>)
        }

      </Row>
    </div >
  );
}