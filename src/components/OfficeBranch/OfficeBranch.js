import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { OfficeBranchCard } from './OfficeBranchCard';

export const OfficeBranch = (props) => {
  React.useEffect(() => {
    !!props.userMe && props.loadBranches(props.userMe.id);
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
            <Link to="/admin/colaborators" style={{ color: 'white', textDecoration: 'none' }}>
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

      <Row>
        {
          props.branches && props.branches.data.map(branch => <><Col xs="10" md="4" lg="4" xg="4"> <OfficeBranchCard key={branch.id} branch={branch} /> </Col></>)
        }

      </Row>
    </div >
  );
}