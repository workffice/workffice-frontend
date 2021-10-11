import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Alert, Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Select from 'react-select';


export const NewRol = (props) => {
    const { error } = props;

    const [data, setData] = useState({});

    const setValue = (name, value) => {
        console.log('data: ', data);
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validate = values => {
        const errors = {};
        if (!values.rolName) {
            errors.rolName = 'Requerido.';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            rolName: "",
        },
        validate,
        onSubmit: async (values) => {
            const newRolName = {...values};
            console.log('rol: ', newRolName);
            console.log('data: ', data);
        },
    });

    const options = [
        {
            value: "",
            label: "Seleccione una opción",
            isDisabled: true,
        },
        { value: "2", label: "Lectura" },
        { value: "3", label: "Lectura y escritura" },
    ];

    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Nuevo <small color="red">rol</small>
                    </h1>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Form onSubmit={formik.handleSubmit} style={{ width: '80%', marginLeft: '10%', marginRight: '10%' }}>
                    <Card>
                        <CardHeader>
                            {
                                <Alert
                                    isOpen={!!error}
                                    color="danger"
                                    fade={true}
                                >
                                    {'Ocurrió un error. Intente nuevamente'}
                                </Alert>
                            }
                        </CardHeader>
                        <CardBody>
                            <div className="form-row">
                                <Col xs="12" md="12" lg="12" xg="12" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.rolName ? 'has-danger' : ''}>
                                        <Label htmlFor="rolName" className="label-form">Nombre</Label>
                                        <Input
                                            type="text"
                                            placeholder="Ingrese el nombre del Rol"
                                            name="rolName"
                                            value={formik.values.rolName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <h4 style={{ marginTop: 20, marginBottom: 0 }}>
                                            Seleccione los recursos y permisos
                                        </h4>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="report" className="label-form">Reporte</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="report"
                                            onChange={value => setValue('report', value)}
                                            onBlur={formik.handleBlur}
                                            options={options}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="office" className="label-form">Oficina</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="office"
                                            onChange={value => setValue('office', value)}
                                            onBlur={formik.handleBlur}
                                            options={options}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="collaborator" className="label-form">Colaborador</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="collaborator"
                                            onChange={value => setValue('collaborator', value)}
                                            onBlur={formik.handleBlur}
                                            options={options}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="rol" className="label-form">Rol</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="rol"
                                            onChange={value => setValue('rol', value)}
                                            options={options}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="membership" className="label-form">Membresía</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="membership"
                                            onChange={value => setValue('membership', value)}
                                            onBlur={formik.handleBlur}
                                            options={options}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>
                                </Col>
                            </div>
                            <hr />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="col-auto">
                                    <Button
                                        type="submit"
                                        className="btn btn-primary mb-3"
                                        color="primary"
                                        style={{ minWidth: 107 }}
                                    >
                                        Crear
                                    </Button>
                                </div>
                                <div className="col-auto">
                                    <Button
                                        type="reset"
                                        className="btn btn-primary mb-3"
                                        style={{ backgroundColor: '#EB5D60', minWidth: 107 }}
                                    >
                                        Cancelar
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Form>
            </Row>
        </div>
    );
}