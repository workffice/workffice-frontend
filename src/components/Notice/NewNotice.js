import { useFormik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import {
    Row,
    Col,
    Card,
    CardBody,
    Input,
    Button,
    Form,
    FormGroup,
    Label,
    CardHeader,
    Container
} from 'reactstrap';
import { Notification } from '../Common/Notification/Notification';
import './styles/NoticeStyle.css';

export const NewNotice = props => {
    const history = useHistory();
    const { notification, hideNotification } = props;
    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Requerido.';
        }
        if (!values.subject) {
            errors.subject = 'Requerido.';
        }
        if (!values.body) {
            errors.body = 'Requerido.';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            subject: "",
            title: "",
            body: "",
        },
        validate,
        onSubmit: async (values) => {
            props.onCreate(props.officeBranch.id, values)
        },
    });

    React.useEffect(() => {
        if (notification.show) {
            if (notification.isSuccess)
                setTimeout(() => {
                    history.push('/admin/notice');
                }, 2500);
            setTimeout(() => {
                hideNotification()
            }, 2000);
        }
    }, [notification.show]);

    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Nueva <small color="red">noticia</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Container>
                <Form onSubmit={formik.handleSubmit} >
                    <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                        <CardHeader>
                            <Notification
                                show={notification.show && notification.isSuccess}
                                message="La noticia ha sido creada correctamente"
                                hideNotification={hideNotification}
                            />
                        </CardHeader>
                        <CardBody>
                            <Col xs="12" md="12" lg="12" xg="12" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                <FormGroup className={formik.errors.subject ? 'has-danger' : ''}>
                                    <Label htmlFor="subject" className="label-form">Asunto</Label>
                                    <Input
                                        type="text"
                                        placeholder="Ingrese el asunto de la noticia"
                                        name="subject"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.subject}
                                    />
                                </FormGroup>
                                <FormGroup className={formik.errors.title ? 'has-danger' : ''}>
                                    <Label htmlFor="noticeName" className="label-form">T??tulo</Label>
                                    <Input
                                        type="text"
                                        placeholder="Ingrese el t??tulo de la noticia"
                                        name="title"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.title}
                                    />
                                </FormGroup>
                                <FormGroup className={formik.errors.body ? 'has-danger' : ''}>
                                    <Label htmlFor="body" className="label-form">Descripci??n</Label>
                                    <Input
                                        type="textarea"
                                        placeholder="Ingrese la descripci??n de la noticia"
                                        name="body"
                                        id="exampleText"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.body}
                                    />
                                </FormGroup>
                            </Col>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="col-auto">
                                    <Button
                                        type="submit"
                                        className="btn-round btn-primary mb-3"
                                        color="primary"
                                        style={{ minWidth: 107 }}
                                    >
                                        Crear
                                    </Button>
                                </div>
                                <div className="col-auto">
                                    <Button
                                        type="reset"
                                        className="btn-round btn-primary mb-3"
                                        style={{ backgroundColor: '#EB5D60', minWidth: 107 }}
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Form>
            </Container>
        </div>
    );
}
