
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { ConfirmationAccountForm } from '../../../components/ConfirmationAccount/ConfirmationAccountForm';
import { confirmationCollab } from '../../../stores/actions/auth/confirmationAccountActions';
import { hideNotificationAction } from '../../../stores/actions/notifications/writeNotificationActions';


export const ConfirmationCollaboratorPage = (props) => {
    let token = '';
    const dispatch = useDispatch()
    const history = useHistory();
    const query = new URLSearchParams(useLocation().search);
    token = query.get("token");
    console.log('%cMyProject%cline:16%ctoken', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(237, 222, 139);padding:3px;border-radius:2px', token)
    React.useEffect(() => {
        dispatch(hideNotificationAction());
    }, [props.error]);

    React.useEffect(() => {
        dispatch(confirmationCollab(token));
        history.push('/auth/login');
    }, [token]);

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
