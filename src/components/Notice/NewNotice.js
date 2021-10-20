import { useFormik } from 'formik';
import React from 'react';
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
import './styles/NoticeStyle.css';

export const NewNotice = () => {
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Requerido.';
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
            name: "",
            subject: "",
            body: "",
            // offices: props.branch.data.id,
        },
        validate,
        onSubmit: async (values) => {
            console.log('values: ', values)
            // props.create(notice);
        },
    });


    // React.useEffect(() => {
    //     if (props.notice !== null) {
    //         history.push('/admin/notice');
    //     }
    // }, [props.membership]);

    // React.useEffect(() => {
    //     if (error.show) {
    //         setTimeout(() => {
    //             dispatch({ type: HIDE_ERROR });
    //         }, 2500);
    //     }
    // }, [error]);


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
                            {/* {
                                <Alert
                                    isOpen={error.show}
                                    color="danger"
                                    fade={false}
                                >
                                    {'Ocurrió un error. Intente nuevamente'}
                                </Alert> */}
                            {/* } */}
                        </CardHeader>
                        <CardBody>
                            <Col xs="12" md="12" lg="12" xg="12" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                <FormGroup className={formik.errors.name ? 'has-danger' : ''}>
                                    <Label htmlFor="noticeName" className="label-form">Nombre</Label>
                                    <Input
                                        type="text"
                                        placeholder="Ingrese el nombre de la noticia"
                                        name="name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                </FormGroup>

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
                                <FormGroup className={formik.errors.body ? 'has-danger' : ''}>
                                    <Label htmlFor="body" className="label-form">Descripción</Label>
                                    <Input
                                        type="textarea"
                                        placeholder="Ingrese la descripción de la noticia"
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
