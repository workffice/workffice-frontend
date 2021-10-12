import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
    Alert,
    Container
} from 'reactstrap';
import { hideNotification } from '../../stores/actions';
import ImageUpload from '../Common/CustomUpload/ImageUpload';
import './styles/OfficeStyle.css';

export const NewOffice = (props) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { notification } = props;
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Requerido.';
        }
        if (!values.sucursal) {
            errors.sucursal = 'Requerido.';
        }
        // if (!values.officePrivacy) {
        //     errors.officePrivacy = 'Requerido.';
        // }
        if (!values.capacity) {
            errors.capacity = 'Requerido.';
        }
        // if (!values.enabledDays) {
        //     errors.enabledDays = 'Requerido.';
        // }
        if (!values.tables) {
            errors.tables = 'Requerido.';
        }
        if (!values.price) {
            errors.price = 'Requerido.';
        }
        // if (!values.multipleSelectServ) {
        //     errors.multipleSelectServ = 'Requerido.';
        // }
        // if (!values.multipleSelectEqu) {
        //     errors.multipleSelectEqu = 'Requerido.';
        // }
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

    const [officePrivacy, setPrivacy] = useState({ value: "SHARED", label: "Compartida" });

    const [enabledOffice, setEnabledOffice] = useState({ value: "1", label: "Disponible" })
    const [enabledDays, setEnabledDays] = useState(null)


    const formik = useFormik({
        initialValues: {
            name: "",
            sucursal: props.branch.id,
            officePrivacy: officePrivacy && officePrivacy.value,
            capacity: 0,
            enabledOffice: enabledOffice && enabledOffice.value,
            enabledDays: null,
            tablesQuantity: 0,
            price: 0,
            multipleSelectServ: null,
            multipleSelectEqu: null,
            description: "",
            photo: "",
        },
        validate,
        onSubmit: async (values) => {
            console.log(values)
            const office = { privacy: officePrivacy.value, ...values }
            props.create(office);
        },
    });


    React.useEffect(() => {
        if (props.office !== null) {
            history.push('/admin/offices');
        }
    }, [props.office]);

    React.useEffect(() => {
        if (notification.show) {
            setTimeout(() => {
                dispatch(hideNotification());
            }, 2500);
        }
    }, [notification]);


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

            <Container>
                <Form onSubmit={formik.handleSubmit} >
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
                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.name ? 'has-danger' : ''}>
                                        <Label htmlFor="officeName" className="label-form">Nombre</Label>
                                        <Input
                                            type="text"
                                            placeholder="Ingrese el nombre de la oficina"
                                            name="name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                    </FormGroup>


                                    <FormGroup className={formik.errors.officePrivacy ? 'has-danger' : ''}>
                                        <Label htmlFor="office-type" className="label-form">Tipo de oficina</Label>
                                        <Select
                                            className="react-select primary"
                                            classNamePrefix="react-select"
                                            name="officePrivacy"
                                            value={officePrivacy}
                                            onChange={value =>
                                                setPrivacy(value)}
                                            onBlur={formik.handleBlur}
                                            options={[
                                                { value: "PRIVATE", label: "Privada" },
                                                { value: "SHARED", label: "Compartida" }
                                            ]}

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
                                                { value: "1", label: "Disponible" },
                                                { value: "0", label: "No disponible" }
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

                                    <FormGroup className={formik.errors.tablesQuantity ? 'has-danger' : ''}>
                                        <Label htmlFor="tablesQuantity" className="label-form">Cantidad de mesas</Label>
                                        <Input
                                            type="number"
                                            placeholder="Ingrese el número de mesas..."
                                            name="tablesQuantity"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            min={1}
                                            value={formik.values.tablesQuantity}
                                        />
                                    </FormGroup>
                                    <FormGroup className={formik.errors.capacityPerTable ? 'has-danger' : ''}>
                                        <Label htmlFor="tablesQuantity" className="label-form">Cantidad de personas por mesa</Label>
                                        <Input
                                            type="number"
                                            placeholder="Ingrese el número de personas por mesas"
                                            name="capacityPerTable"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            min={1}
                                            value={formik.values.capacityPerTable}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                    <FormGroup className={formik.errors.price ? 'has-danger' : ''}>
                                        <Label htmlFor="price" className="label-form">Precio por hora</Label>
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
                                                        <Button className='btn btn-primary' id='servicesButton' type='button'>
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

                            </Row>

                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        className="btn btn-primary"
                                        color="primary"
                                        type="submit"
                                        disabled={formik.isSubmitting}>
                                        Crear Oficina
                                    </Button>
                                    <Button
                                        type="reset"
                                        className="btn btn-primary"
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
