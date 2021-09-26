import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    Alert
} from 'reactstrap';
import ImageUpload from '../CustomUpload/ImageUpload';
import './styles/OfficeStyle.css';

export const NewOffice = (props) => {
    const { error } = props;
    const validate = values => {
        const errors = {};
        if (!values.officeName) {
            errors.officeName = 'Requerido.';
        }
        if (!values.sucursal) {
            errors.sucursal = 'Requerido.';
        }
        if (!values.officeType) {
            errors.officeType = 'Requerido.';
        }
        if (!values.capacity) {
            errors.capacity = 'Requerido.';
        }
        if (!values.enabledDays) {
            errors.enabledDays = 'Requerido.';
        }
        if (!values.tables) {
            errors.tables = 'Requerido.';
        }
        if (!values.price) {
            errors.price = 'Requerido.';
        }
        if (!values.multipleSelectServ) {
            errors.multipleSelectServ = 'Requerido.';
        }
        if (!values.multipleSelectEqu) {
            errors.multipleSelectEqu = 'Requerido.';
        }
        if (!values.description) {
            errors.description = 'Requerido.';
        }
        // if (!values.photo) {
        //     errors.photo = 'Requerido.';
        // }
        return errors;
    };

    const [multipleSelectServ, setMultipleSelectServ] = useState(null);
    const [multipleSelectEqu, setMultipleSelectEqu] = useState(null);
    const [sucursal, setSucursal] = useState(null);
    const [officeType, setOfficeType] = useState(null);
    const [enabledOffice, setEnabledOffice] = useState(true)
    const [enabledDays, setEnabledDays] = useState(null)

    const formik = useFormik({
        initialValues: {
            officeName: "",
            sucursal: null,
            officeType: null,
            capacity: 0,
            enabledOffice: null,
            enabledDays: null,
            tables: 0,
            price: 0,
            multipleSelectServ: null,
            multipleSelectEqu: null,
            description: "",
            photo: "",
        },
        validate,
        onSubmit: async (values) => {
            console.log('credentials: ', values);

        },
    });

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
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.officeName ? 'has-danger' : ''}>
                                        <Label htmlFor="officeName" className="label-form">Nombre</Label>
                                        <Input
                                            type="text"
                                            placeholder="Ingrese el nombre de la oficina"
                                            name="officeName"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.officeName}
                                        />
                                    </FormGroup>

                                    <FormGroup className={formik.errors.sucursal ? 'has-danger' : ''}>
                                        <Label htmlFor="sucursalSelector" className="label-form">Sucursal</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="sucursalSelector"
                                            value={sucursal}
                                            onChange={value => setSucursal(value)}
                                            onBlur={formik.handleBlur}
                                            options={[
                                                {
                                                    value: "",
                                                    label: "Single Option",
                                                    isDisabled: true
                                                },
                                                { value: "2", label: "Sucursal 1" },
                                                { value: "3", label: "Sucurasl 2" }
                                            ]}
                                            placeholder="Seleccione una sucursal"
                                        />
                                    </FormGroup>

                                    <FormGroup className={formik.errors.officeType ? 'has-danger' : ''}>
                                        <Label htmlFor="office-type" className="label-form">Tipo de oficina</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="officeType"
                                            value={officeType}
                                            onChange={value => setOfficeType(value)}
                                            onBlur={formik.handleBlur}
                                            options={[
                                                {
                                                    value: "",
                                                    label: "Tipo de oficina",
                                                    isDisabled: true
                                                },
                                                { value: "2", label: "Privada" },
                                                { value: "3", label: "Compartida" }
                                            ]}
                                            placeholder="Seleccione un tipo"
                                        />
                                    </FormGroup>

                                    <FormGroup className={formik.errors.capacity ? 'has-danger' : ''}>
                                        <Label htmlFor="capacity" className="label-form">Capacidad</Label>
                                        <Input
                                            type="number"
                                            placeholder="Ingrese el número máximo de personas..."
                                            name="capacity"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            min={1}
                                            value={formik.values.capacity}
                                        />
                                    </FormGroup>

                                    <FormGroup className={formik.errors.enabledOffice ? 'has-danger' : ''}>
                                        <Label htmlFor="availability" className="label-form">Disponibilidad</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="enabledOffice"
                                            value={enabledOffice}
                                            onBlur={formik.handleBlur}
                                            onChange={value => setEnabledOffice(value)}
                                            options={[
                                                {
                                                    value: "",
                                                    label: "Seleccione disponibilidad",
                                                    isDisabled: true
                                                },
                                                { value: "2", label: "Disponible" },
                                                { value: "3", label: "No disponible" }
                                            ]}
                                            placeholder="Seleccione disponibilidad"
                                        />
                                    </FormGroup>

                                    {
                                        enabledOffice.label === "No disponible" && (
                                            <FormGroup className={formik.errors.enabledDays ? 'has-danger' : ''}>
                                                <Select
                                                        className="react-select"
                                                        classNamePrefix="react-select"
                                                        placeholder="Seleccione los días que la oficina no está disponible"
                                                        name="enabledDays"
                                                        closeMenuOnSelect={false}
                                                        isMulti
                                                        value={enabledDays}
                                                        onChange={value => setEnabledDays(value)}
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
                                        )
                                    }

                                    <FormGroup className={formik.errors.tables ? 'has-danger' : ''}>
                                        <Label htmlFor="tables" className="label-form">Cantidad de mesas</Label>
                                        <Input
                                            type="number"
                                            placeholder="Ingrese el número de mesas..."
                                            name="tables"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            min={1}
                                            value={formik.values.tables}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.price ? 'has-danger' : ''}>
                                        <Label htmlFor="price" className="label-form">Precio por hora</Label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>$</InputGroupText>
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

                                    <FormGroup className={formik.errors.multipleSelectServ ? 'has-danger' : ''} style={{ marginLeft: '4%' }}>
                                        <Row className='row-label-services'>
                                            <Label htmlFor="multipleSelectServ" className="label-form">Servicios</Label>

                                            <div className='row-form-select' style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '80%' }}>
                                                    <Select
                                                        className="react-select"
                                                        classNamePrefix="react-select"
                                                        placeholder='Seleccione los servicios...'
                                                        name="multipleSelectServ"
                                                        closeMenuOnSelect={false}
                                                        isMulti
                                                        value={multipleSelectServ}
                                                        onChange={value => setMultipleSelectServ(value)}
                                                        onBlur={formik.handleBlur}
                                                        options={[
                                                            {
                                                                value: "",
                                                                label: " Servicios",
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
                                                </div>
                                                <div className='button-container'>
                                                    <Link to="/admin/services-equipment">
                                                        <Button className='btn btn-primary' id='servicesButton'>
                                                            Crear
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Row>
                                    </FormGroup>

                                    <FormGroup className={formik.errors.multipleSelectEqu ? 'has-danger' : ''} style={{ marginLeft: '4%' }}>
                                        <Row className='row-label-equipment'>
                                            <Label htmlFor="multipleSelectEqu" className="label-form">Equipamiento</Label>

                                            <div className='row-form-select' style={{ width: '100%', display: 'flex' }}>
                                                <div style={{ width: '80%' }}>
                                                    <Select
                                                        className="react-select"
                                                        classNamePrefix="react-select"
                                                        placeholder='Seleccione el equipamiento...'
                                                        name="multipleSelectEqu"
                                                        closeMenuOnSelect={false}
                                                        isMulti
                                                        value={multipleSelectEqu}
                                                        onChange={value => setMultipleSelectEqu(value)}
                                                        onBlur={formik.handleBlur}
                                                        options={[
                                                            {
                                                                value: "",
                                                                label: "Equipamiento",
                                                                isDisabled: true
                                                            },
                                                            { value: "2", label: "Monitores" },
                                                            { value: "3", label: "Silla ergonómica" },
                                                            { value: "4", label: "Parlante" },
                                                            { value: "5", label: "Teclado" },
                                                            { value: "6", label: "Proyector" },
                                                            { value: "7", label: "Monitores " },
                                                            { value: "8", label: "Silla ergonómica" },
                                                            { value: "9", label: "Parlante" },
                                                            { value: "10", label: "Teclado" },
                                                            { value: "11", label: "Proyector" },
                                                        ]}
                                                    />
                                                </div>
                                                <div className='button-container'>
                                                    <Link to="/admin/services-equipment">
                                                        <Button className='btn btn-primary' id='equipmentButton'>
                                                            Crear
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Row>
                                    </FormGroup>

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

                                    <FormGroup className={formik.errors.photo ? 'has-danger' : ''}>
                                        <Row className='photo' style={{ marginLeft: '0%' }}>
                                            <Label htmlFor="photo" className="label-form">Fotos</Label>
                                        </Row>
                                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                            <ImageUpload />
                                        </Row>
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
