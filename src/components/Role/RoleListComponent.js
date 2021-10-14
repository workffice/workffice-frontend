import { includes } from 'lodash-es';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { EmptyComponent } from '../Common/Empty/EmptyComponent';
import Forbidden from "../Common/Forbidden/Forbidden";
import { RoleComponent } from './RoleComponent';

export const RoleListComponent = ({ permission, roles, fetchRoles }) => {

  React.useEffect(() => { fetchRoles() }, [])

  const renderRoles = () => {
    if (permission.isForbidden && includes(permission.resources, "role"))
      return <Forbidden message="No tienes acceso para ver los roles de esta sucursal" />
    return roles !== undefined && roles.length !== 0 ? roles.map((role) => {
      return <Col key={role.id} xs="10" md="4" lg="4" xg="4">
        <RoleComponent {...role} />
      </Col>
    }) : <EmptyComponent />
  }
  return (
    <div className="content">
      <Row style={{ display: 'grid', paddingTop: 40 }}>
        <Col xs="12" md="12" lg="12" xg="12">
          <h1>
            Gestionar <small color="red">roles</small>
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
            <Link to="/admin/new-rol" style={{ color: 'white', textDecoration: 'none' }}>
              {' '}
              <i className="fa fa-plus" /> Nuevo rol
            </Link>
          </Button>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        {renderRoles()}
      </Row>
    </div >
  );
}