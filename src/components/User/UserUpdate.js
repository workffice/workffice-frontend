import { useFormik } from 'formik';
import React from 'react'
import {
    Card,
    CardBody,
    Form,
    Input,
    Col,
    Row,
    FormGroup,
    CardHeader,
    Button,
} from 'reactstrap';


export const UserUpdate = (props) => {
    const {
        address,
        bio,
        email,
        lastname,
        name,
    } = props || {}

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: name,
            lastname: lastname,
            address: address,
            bio: bio,
        },
        onSubmit: async (values) => {
            console.log(values);
            await props.update(values);
        },
    });
    return (
        <Card>
            <CardHeader>
                <h5 className="title">Editar Perfil</h5>
            </CardHeader>
            <CardBody>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col className="pr-1" md="4">
                            <FormGroup>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <Input type="email" disabled defaultValue={email} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pr-1" md="6">
                            <FormGroup>
                                <label htmlFor="name">Nombre</label>
                                <Input
                                    value={formik.values.name}
                                    placeholder={name}
                                    onChange={formik.handleChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                />
                            </FormGroup>
                        </Col>
                        <Col className="pl-1" md="6">
                            <FormGroup>
                                <label htmlFor="lastname">Apellido</label>
                                <Input
                                    value={formik.values.lastname}
                                    placeholder={lastname}
                                    onChange={formik.handleChange}
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label htmlFor="address">Domicilio</label>
                                <Input
                                    value={formik.values.address}
                                    placeholder={address}
                                    onChange={formik.handleChange}
                                    type="text"
                                    name="address"
                                    id="address"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <FormGroup>
                                <label htmlFor="bio">Descripcion</label>
                                <Input
                                    value={formik.values.bio}
                                    placeholder={bio}
                                    onChange={formik.handleChange}
                                    type="textarea"
                                    name="bio"
                                    id="bio"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="pr-1">
                            <FormGroup>
                                <Button md="12" type="submit" disabled={formik.isSubmitting}>Guardar</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    )
}
