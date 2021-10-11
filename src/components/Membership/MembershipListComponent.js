import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
// import { EmptyComponent } from '../Empty/EmptyComponent';
import { MembershipComponent } from './MembershipComponent';

export const MembershipListComponent = () => {
  // const { membership } = props;

  const membership1 = {
    name: "Membresía 1",
    description: "Descripción 1",
    price: 56,
    active: true,
  };

  const membership2 = {
    name: "Membresía 2",
    description: "Descripción 2",
    price: 100,
    active: false,
  };

  const membership3 = {
    name: "Membresía 3",
    description: "Descripción 3",
    price: 500,
    active: true,
  };

  const membership4 = {
    name: "Membresía 4",
    description: "Descripción 4",
    price: 230,
    active: false,
  };

  return (
    <div className="content">
      <Row style={{ display: 'grid', paddingTop: 40 }}>
        <Col xs="12" md="12" lg="12" xg="12">
          <h1>
            Gestionar <small color="red">membresías</small>
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
            <Link to="/admin/new-membership" style={{ color: 'white', textDecoration: 'none' }}>
              {' '}
              <i className="fa fa-plus" /> Nueva membresía
            </Link>
          </Button>
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        {/* {membership ? props.membership.data.map((membership) => {
          return <Col xs="10" md="4" lg="4" xg="4">
            <MembershipComponent membership={membership} />
          </Col>
        }) : <EmptyComponent />

        } */}

        <MembershipComponent membership={membership1} />
        <MembershipComponent membership={membership2} />
        <MembershipComponent membership={membership3} />
        <MembershipComponent membership={membership4} />

      </Row>
    </div >
  );
}