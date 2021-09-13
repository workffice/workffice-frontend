import { useFormik } from 'formik';
import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import ImageUpload from '../CustomUpload/ImageUpload';


export const OfficeBranchCreate = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            type: '',
        },
        onSubmit: () => {
        },
    });
    return (
        <>
            <Form className="form" onSubmit={formik.handleSubmit}>
                <Card className="" style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <CardHeader>
                        <CardTitle tag="h4"></CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label className="label-form" for="office-branch-name"> Nombre </Label>
                                    <Input type="text" />{' '}
                                </FormGroup>
                                <FormGroup>
                                    <Label className="label-form" for="office-branch-description"> Descripción </Label>
                                    <Input type="textarea" />{' '}
                                </FormGroup>

                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label className="label-form" for="office-branch-address"> Dirección </Label>
                                    <Input type="text" />{' '}
                                </FormGroup>
                                <FormGroup>
                                    <Label className="label-form" for="office-branch-images"> Foto </Label>
                                </FormGroup>
                                <ImageUpload className="text-center" />
                            </Col>
                        </Row>
                    </CardBody >
                    <CardFooter className="text-center">
                        <Row>
                            <Col>
                                <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    disabled={formik.isSubmitting}>
                                    Crear cuenta
                                </Button>

                                <Button
                                    className="btn-round"
                                    color="danger"
                                    type="submit"
                                    disabled={formik.isSubmitting}>
                                    Cancelar
                                </Button>
                            </Col>
                        </Row>

                    </CardFooter>
                </Card >
            </Form >
        </>
    )
}
