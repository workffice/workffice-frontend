import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RegisterInfo } from '../../../components/Register/RegisterInfo';
import { RegisterForm } from '../../../components/Register/RegisterForm';
import { Loading } from '../../../components/Loading/Loading';


function Register(props) {
  const { loading, error } = props;
  const { onRegister } = props;
  return (
    <div className="register-page">
      <Container>
        {props.loading ?
          <Row
            style={{ textAlign: 'center' }}
          >
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Loading />
            </Col>
          </Row>
          :
          <Row>
            <Col className="ml-auto" lg="5" md="5">
              <RegisterInfo />
            </Col>
            <Col className="mr-auto" lg="4" md="6">

              <RegisterForm onRegister={onRegister} loading={loading} error={error} />
            </Col>
          </Row>
        }
      </Container>
      <div
        className={props.loading ? 'background-loading' : 'full-page-background'}
        style={{
          backgroundImage: `url(${require('../../../assets/img/bg/Office.jpg').default
            })`,
        }}
      />
    </div>
  );
}

export default Register;
