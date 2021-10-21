import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { hideNotificationAction } from '../../stores/actions/notifications/writeNotificationActions';
import { Notification } from '../Common/Notification/Notification';
import { OfficeForm } from './OfficeForm';
import './styles/OfficeStyle.css';

export const NewOffice = ({ notification, create, branch }) => {
    const history = useHistory();
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (notification.show) {
            if (notification.isSuccess)
                setTimeout(() => {
                    history.push('/admin/offices');
                }, 2500);
            setTimeout(() => {
                dispatch(hideNotificationAction());
            }, 2000);
        }
    }, [notification.show]);

    const createOffice = (officeFormData) => {
        create(branch.id, officeFormData)
    }

    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Nueva <small color="red">oficina</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Notification
                    isError={true}
                    message="Oops algo salio mal"
                    show={notification.show && notification.isError}
                />
                <Notification
                    message="La oficina se creo correctamente"
                    show={notification.show && notification.isSuccess}
                />
            </Row>
            <OfficeForm
                onSubmit={createOffice}
                confirmButtonName="Crear"
            />
        </div>
    );
}
