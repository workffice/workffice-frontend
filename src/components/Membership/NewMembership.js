import { useFormik } from 'formik';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import Select from 'react-select';
import {
    Row,
    Col,
    Card,
    CardBody,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button,
    Form,
    FormGroup,
    Label,
    CardHeader,
    // Alert,
    Container
} from 'reactstrap';
// import { HIDE_ERROR } from '../../stores/actions';
import './styles/MembershipStyle.css';

export const NewMembership = () => {
    // const history = useHistory();
    // const dispatch = useDispatch()
    // const { error } = props;
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Requerido.';
        }
        if (!values.multipleSelectOffices) {
            errors.multipleSelectOffices = 'Requerido.';
        }
        if (!values.price) {
            errors.price = 'Requerido.';
        }
        if (!values.multipleSelectDays) {
            errors.multipleSelectDays = 'Requerido.';
        }
        if (!values.description) {
            errors.description = 'Requerido.';
        }
        return errors;
    };

    const [multipleSelectDays, setMultipleSelectDays] = useState(null);
    const [multipleSelectOffices, setMultipleSelectOffices] = useState(null);

    const formik = useFormik({
        initialValues: {
            name: "",
            // offices: props.branch.data.id,
            multipleSelectOffices: null,
            price: 0,
            multipleSelectDays: null,
            description: "",
        },
        validate,
        onSubmit: async (values) => {
            console.log(values)
            // props.create(membership);
        },
    });


    // React.useEffect(() => {
    //     if (props.membership !== null) {
    //         history.push('/admin/membership');
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
                        Nueva <small color="red">membresía</small>
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
                            <Row>
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.name ? 'has-danger' : ''}>
                                        <Label htmlFor="officeName" className="label-form">Nombre</Label>
                                        <Input
                                            type="text"
                                            placeholder="Ingrese el nombre de la membresía"
                                            name="name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                    </FormGroup>

                                    <FormGroup className={formik.errors.multipleSelectOffices ? 'has-danger' : ''}>
                                        <Label htmlFor="multipleSelectOffices" className="label-form">Oficinas</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            placeholder='Seleccione las oficinas que incluye...'
                                            name="multipleSelectOffices"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            value={multipleSelectOffices}
                                            onChange={value => setMultipleSelectOffices(value)}
                                            onBlur={formik.handleBlur}
                                            options={[
                                                {
                                                    value: "",
                                                    label: " Oficinas",
                                                    isDisabled: true
                                                },
                                                { value: "2", label: "Cafetería" },
                                                { value: "3", label: "Wifi" },
                                                { value: "4", label: "Estacionamiento" },
                                                { value: "5", label: "Cafetería " },
                                                { value: "6", label: "Wifi" },
                                                { value: "7", label: "Estacionamiento" },
                                                { value: "8", label: "Cafetería " },
                                                { value: "9", label: "Wifi" },
                                                { value: "10", label: "Estacionamiento" },
                                            ]}
                                        />
                                    </FormGroup>

                                    <FormGroup className={formik.errors.multipleSelectDays ? 'has-danger' : ''}>
                                        <Label htmlFor="multipleSelectOffices" className="label-form">Días</Label>
                                        <Select
                                            className="react-select"
                                            classNamePrefix="react-select"
                                            placeholder="Seleccione los días que incluye la membresía"
                                            name="multipleSelectDays"
                                            closeMenuOnSelect={false}
                                            isMulti
                                            value={multipleSelectDays}
                                            onChange={value => setMultipleSelectDays(value)}
                                            onBlur={formik.handleBlur}
                                            options={[
                                                {
                                                    value: "",
                                                    label: "Seleccione uno más días días",
                                                    isDisabled: true
                                                },
                                                { value: "2", label: "Lunes" },
                                                { value: "3", label: "Martes" },
                                                { value: "4", label: "Miércoles" },
                                                { value: "5", label: "Jueves" },
                                                { value: "6", label: "Viernes" },
                                                { value: "7", label: "Sábado" },
                                                { value: "8", label: "Domingo" },
                                            ]}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.description ? 'has-danger' : ''}>
                                        <Label htmlFor="description" className="label-form">Descripción</Label>
                                        <Input
                                            type="textarea"
                                            name="description"
                                            id="exampleText"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.description}
                                        />
                                    </FormGroup>
                                    <FormGroup className={formik.errors.price ? 'has-danger' : ''}>
                                        <Label htmlFor="price" className="label-form">Precio </Label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>$ {'  '}</InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                type="number"
                                                placeholder="Ingrese el precio por hora"
                                                name="price"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                min={0}
                                                value={formik.values.price}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        className="btn-round"
                                        color="primary"
                                        type="submit"
                                        disabled={formik.isSubmitting}>
                                        Crear membresía
                                    </Button>
                                    <Button
                                        type="reset"
                                        className="btn-round"
                                        color="danger"
                                        style={{ backgroundColor: '#EB5D60', minWidth: 107 }}
                                    >
                                        Cancelar
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Form>
            </Container>
        </div>
    );
}
