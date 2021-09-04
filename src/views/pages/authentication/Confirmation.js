
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom';
import { ConfirmationAccountForm } from '../../../components/ConfirmationAccount/ConfirmationAccountForm'

export const Confirmation = () => {
    const { token } = useParams();
    console.log("token", token);
    // useEffect(() => {

    // })
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
                className="full-page-background"
                style={{
                    backgroundImage: `url(${require('../../../assets/img/bg/markus-spiske-187777.jpg').default
                        })`,
                }}
            />
        </div>
    )
}
