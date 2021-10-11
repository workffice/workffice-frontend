import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { RolComponent } from './RolComponent';
// import { EmptyComponent } from '../Empty/EmptyComponent';

export const RolListComponent = () => {

  // const { rols } = props;

  const rol1 = {
    rolName: "Rol 1",
    active: true,
    resource:
      [
        { name: "Membresía", value: "3", label: "Lectura y escritura" },
        { name: "Oficina", value: "2", label: "Lectura" },
        { name: "Reporte", value: "2", label: "Lectura" },
      ]
  };

  const rol2 = {
    rolName: "Rol 2",
    active: false,
    resource:
      [
        { name: "Rol", value: "3", label: "Lectura y escritura" },
        { name: "Reporte", value: "2", label: "Lectura" },
      ]
  };

  const rol3 = {
    rolName: "Rol 3",
    active: true,
    resource:
      [
        { name: "Colaborador", value: "3", label: "Lectura y escritura" },
        { name: "Oficina", value: "2", label: "Lectura" },
        { name: "Membresía", value: "3", label: "Lectura y escritura" },
        { name: "Reporte", value: "2", label: "Lectura" },
      ]
  };

  const rol4 = {
    rolName: "Rol 4",
    active: false,
    resource:
      [
        { name: "Oficina", value: "2", label: "Lectura" },
        { name: "Membresía", value: "3", label: "Lectura y escritura" },
        { name: "Reporte", value: "2", label: "Lectura" },
        { name: "Colaborador", value: "3", label: "Lectura y escritura" },
        { name: "Rol", value: "3", label: "Lectura y escritura" },
      ]
  };

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
        {/* {rols ? props.rols.data.map((rols) => {
          return <Col xs="10" md="4" lg="4" xg="4">
            <RolComponent rol={rol} />
          </Col>
        }) : <EmptyComponent />

        } */}

        <RolComponent rol={rol1} />
        <RolComponent rol={rol2} />
        <RolComponent rol={rol3} />
        <RolComponent rol={rol4} />

      </Row>
    </div >
  );
}