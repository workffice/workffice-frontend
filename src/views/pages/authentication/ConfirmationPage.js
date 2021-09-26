
import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Col, Container, Row } from 'reactstrap'
import { ConfirmationAccountForm } from '../../../components/ConfirmationAccount/ConfirmationAccountForm'
import { confirmation } from '../../../stores/actions/auth/confirmationAccountActions';
import { HIDE_ERROR } from '../../../stores/actions';


export const ConfirmationPage = (props) => {
    let token = '';
    const dispatch = useDispatch()
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);
    token = query.get("token");
    React.useEffect(() => {
        dispatch(confirmation(token));
        history.push('/auth/login');
    }, [token]);
    React.useEffect(() => {
        dispatch({ type: HIDE_ERROR });
    }, [props.error])

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
