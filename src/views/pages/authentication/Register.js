import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RegisterInfo } from '../../../components/Register/RegisterInfo';
import { RegisterForm } from '../../../components/Register/RegisterForm';



function Register(props) {
  const { loading, error } = props;
  console.log("loading",loading)
  console.log("error",error)
  const { onRegister } = props;
  return (
    <div className="register-page">
      <Container>
        <Row>
          <Col className="ml-auto" lg="5" md="5">
            <RegisterInfo />
          </Col>
          <Col className="mr-auto" lg="4" md="6">
            <RegisterForm onRegister={onRegister} loading={loading} error={error}/>
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
