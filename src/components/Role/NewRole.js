import React from 'react';
import { useFormik } from 'formik';
import { Alert, Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Select from 'react-select';


export const NewRole = (props) => {
    const { error } = props;

    const validate = values => {
        const errors = {};
        if (!values.roleName) {
            errors.roleName = 'Requerido.';
        }
        const {
            officeRoleAccess,
            collaboratorRoleAccess,
            roleRoleAccess,
            membershipRoleAccess,
        } = values
        const permissions = [
            officeRoleAccess.value,
            collaboratorRoleAccess.value,
            roleRoleAccess.value,
            membershipRoleAccess.value,
        ].filter(permission => permission !== null && permission !== undefined && permission !== '')
        if (permissions.length == 0)
            errors.access = 'Al menos un permiso es requerido'
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            roleName: "",
            officeRoleAccess: "",
            collaboratorRoleAccess: "",
            roleRoleAccess: "",
            membershipRoleAccess: "",
        },
        validate,
        onSubmit: async ({
            roleName,
            officeRoleAccess,
            collaboratorRoleAccess,
            roleRoleAccess,
            membershipRoleAccess,
        }) => {
            const permissions = [
                { resource: "OFFICE", access: officeRoleAccess.value },
                { resource: "COLLABORATOR", access: collaboratorRoleAccess.value },
                { resource: "ROLE", access: roleRoleAccess.value },
                { resource: "MEMBERSHIP", access: membershipRoleAccess.value },
            ].filter(permission => permission.access !== null && permission.access !== undefined && permission.access !== '')
            props.createRole({
                name: roleName,
                permissions: permissions,
            })
        },
    });

    const accessOptions = [
        {
            value: "",
            label: "Seleccione una opción",
            isDisabled: true,
        },
        { value: "READ", label: "Lectura" },
        { value: "WRITE", label: "Lectura y escritura" },
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
                                    <Label className="text-danger">{formik.errors.access}</Label>
                                    <FormGroup className={formik.errors.roleName ? 'has-danger' : ''}>
                                        <Label htmlFor="roleName" className="label-form">Nombre</Label>
                                        <Input
                                            type="text"
                                            placeholder="Ingrese el nombre del Rol"
                                            name="roleName"
                                            value={formik.values.roleName}
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
                                        <Label htmlFor="officeRoleAccess" className="label-form">Oficina</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="officeRoleAccess"
                                            id="officeRoleAccess"
                                            onChange={value => formik.setFieldValue("officeRoleAccess", value)}
                                            onBlur={formik.handleChange}
                                            options={accessOptions}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="collaboratorRoleAccess" className="label-form">Colaborador</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="collaboratorRoleAccess"
                                            id="collaboratorRoleAccess"
                                            onChange={value => formik.setFieldValue("collaboratorRoleAccess", value)}
                                            onBlur={formik.handleBlur}
                                            options={accessOptions}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="roleRoleAccess" className="label-form">Rol</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="roleRoleAccess"
                                            id="roleRoleAccess"
                                            onChange={value => formik.setFieldValue("roleRoleAccess", value)}
                                            options={accessOptions}
                                            placeholder="Seleccione un permiso"
                                            styles={{ width: '80%' }}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="membershipRoleAccess" className="label-form">Membresía</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="membershipRoleAccess"
                                            id="membershipRoleAccess"
                                            onChange={value => formik.setFieldValue("membershipRoleAccess", value)}
                                            onBlur={formik.handleBlur}
                                            options={accessOptions}
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
