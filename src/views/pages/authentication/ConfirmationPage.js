
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom';

import { ConfirmationAccountForm } from '../../../components/ConfirmationAccount/ConfirmationAccountForm'

export const ConfirmationPage = (props) => {
    
    const token = useLocation();

    console.log("token", token);
    return (
        <div className="login-page">
            <Container>
                <Row
                    style={{ textAlign: 'center' }}
                >
                    <Col className="ml-auto mr-auto" lg="6" md="6">
                        <ConfirmationAccountForm />
                    </Col>
                </Row>
            </Container>
            <div
                className={props.loading ? 'background-loading' : 'full-page-background'}
                style={{
                    backgroundImage: `url(${require('../../../assets/img/bg/ana-bernardo.jpg').default
                        })`,
                }}
            />
        </div>
    )
}
