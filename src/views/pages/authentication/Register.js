import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { connect } from 'react-redux';
// import { createStart } from '../../stores/actions/auth';
// import { useFormik } from "formik";

import { RegisterInfo } from '../../../components/Register/RegisterInfo';
import { RegisterForm } from '../../../components/Register/RegisterForm';


function Register(props) {
  const { onRegister } = props;
  return (
    <div className="register-page">
      <Container>
        <Row>
          <Col className="ml-auto" lg="5" md="5">
            <RegisterInfo />
          </Col>
          <Col className="mr-auto" lg="4" md="6">
            <RegisterForm onRegister={onRegister} />
          </Col>
        </Row>
      </Container>
      <div
        className="full-page-background"
        style={{
          backgroundImage: `url(${require('../../../assets/img/bg/Office.jpg').default
            })`,
        }}
      />
    </div>
  );
}

export default Register;
