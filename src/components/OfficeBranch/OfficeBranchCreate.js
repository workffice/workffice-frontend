import React from 'react'
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import {
    Button,
    Card,
    CardBody,
    Form,
    Input,
    Label,
    Col,
    Row,
    Container,
    FormGroup,
    CardHeader,
    Alert,
} from 'reactstrap';


export const OfficeBranchCreate = ({ notification, create }) => {
    const history = useHistory();
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Requerido.';
        }
        if (!values.description) {
            errors.description = 'Requerido.';
        }
        if (!values.phone) {
            errors.phone = 'Requerido.';
        }
        if (!values.province) {
            errors.province = 'Requerido.';
        }
        if (!values.city) {
            errors.city = 'Requerido.';
        }
        if (!values.street) {
            errors.street = 'Requerido.';
        }
        if (!values.postalCode) {
            errors.postalCode = 'Requerido.';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            phone: "",
            imagesUrls: ["image2.com"],
            province: "",
            city: "",
            street: "",
            postalCode: ""
        },
        validate,
        onSubmit: async (values) => {
            await create(values);
            setTimeout(() => {
                history.push('/admin/office-branch');
            }, 1000);

        },
    });
    return (
        <Container>
            <Form onSubmit={formik.handleSubmit}>
                <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <CardHeader>
                        {
                            <Alert
                                isOpen={notification.show && notification.isError}
                                color="danger"
                                fade={false}
                            >
                                {'Ocurrió un error. Intente nuevamente'}
                            </Alert>
                        }
                    </CardHeader>
                    <CardBody>

                        <Row>
                            <Col lg="6">
                                <FormGroup className={formik.errors.name ? 'has-danger' : ''}>
                                    <Label htmlFor="name" className="label-form"> Nombre </Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Nombre.."
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name} />
                                    {formik.errors.name && formik.touched.name ? (
                                        <div className="error">{formik.errors.name}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup className={formik.errors.province ? 'has-danger' : ''}>
                                    <Label htmlFor="province" className="label-form"> Provincia </Label>
                                    <Input
                                        type="text"
                                        name="province"
                                        placeholder="Provincia.."
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.province} />
                                    {formik.errors.province && formik.touched.province ? (
                                        <div className="error">{formik.errors.province}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup className={formik.errors.city ? 'has-danger' : ''}>
                                    <Label htmlFor="city" className="label-form"> Ciudad </Label>
                                    <Input
                                        type="text"
                                        name="city"
                                        placeholder="Ciudad.."
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.city} />
                                    {formik.errors.city && formik.touched.city ? (
                                        <div className="error">{formik.errors.city}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup className={formik.errors.street ? 'has-danger' : ''}>
                                    <Label htmlFor="street" className="label-form"> Dirección </Label>
                                    <Input
                                        type="text"
                                        name="street"
                                        placeholder="Dirección.."
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.street} />
                                    {formik.errors.street && formik.touched.street ? (
                                        <div className="error">{formik.errors.street}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup className={formik.errors.postalCode ? 'has-danger' : ''}>
                                    <Label htmlFor="postalCode" className="label-form"> Código postal </Label>
                                    <Input
                                        type="text"
                                        name="postalCode"
                                        placeholder="Código Postal.."
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.postalCode} />
                                    {formik.errors.postalCode && formik.touched.postalCode ? (
                                        <div className="error">{formik.errors.postalCode}</div>
                                    ) : null}
                                </FormGroup>

                            </Col>
                            <Col lg="6">
                                <FormGroup className={formik.errors.phone ? 'has-danger' : ''}>
                                    <Label htmlFor="phone" className="label-form"> Teléfono de contacto </Label>
                                    <Input
                                        type="text"
                                        name="phone"
                                        placeholder="Ingrese el teléfono"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone} />
                                    {formik.errors.phone && formik.touched.phone ? (
                                        <div className="error">{formik.errors.phone}</div>
                                    ) : null}
                                </FormGroup>
                                <FormGroup className={formik.errors.description ? 'has-danger' : ''}>
                                    <Label htmlFor="description" className="label-form"> Descripción </Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        placeholder="Descripción.."
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.description} />
                                    {formik.errors.description && formik.touched.description ? (
                                        <div className="error">{formik.errors.description}</div>
                                    ) : null}
                                </FormGroup>

                                <FormGroup>
                                    <Label className="label-form"> Foto </Label>

                                    {/* <ImageUpload className="text-center" /> */}
                                </FormGroup>

                            </Col>
                        </Row>
                        <Row style={{ textAlign: 'center' }}>
                            <Col>

                                <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    disabled={formik.isSubmitting}>
                                    Crear Sucursal
                                </Button>
                            </Col>
                        </Row>


                    </CardBody >
                </Card >
            </Form>
        </Container >
    )
}
