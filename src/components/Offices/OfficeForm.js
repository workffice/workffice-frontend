import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import {
    Button, Card,
    CardBody, Col, Container, Form,
    FormGroup, Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Label, Row
} from 'reactstrap';
import ImageUpload from '../Common/CustomUpload/ImageUpload';
import './styles/OfficeStyle.css';

export const OfficeForm = ({ office, onSubmit, inactivities, confirmButtonName }) => {
    const typesOptions = [
        {
            value: "",
            label: "Seleccione una opción",
        },
        { value: "PRIVATE", label: "Privada" },
        { value: "SHARED", label: "Compartida" },
    ];
    const getPrivacyLabel = privacy => {
        if (privacy === "PRIVATE")
            return "Privada"
        else
            return "Compartida"
    }

    const getDay = day => {
        switch (day) {
            case ("MONDAY"): return "Lunes"
            case ("TUESDAY"): return "Martes"
            case ("WEDNESDAY"): return "Miércoles"
            case ("THURSDAY"): return "Jueves"
            case ("FRIDAY"): return "Viernes"
            case ("SATURDAY"): return "Sábado"
            case ("SUNDAY"): return "Domingo"
        }
    }

    const validate = values => {
        const errors = {};
        if (!values.officeName) {
            errors.officeName = 'Requerido.';
        }
        if (!values.officeType.value || values.officeType.value === "") {
            errors.officeType = 'Requerido.';
        }
        // if (!values.enabledDays) {
        //     errors.enabledDays = 'Requerido.';
        // }
        if (!values.tablesQuantity) {
            errors.tablesQuantity = 'Requerido.';
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

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            officeName: office ? office.name : "",
            officeType: office ? { value: office.privacy, label: getPrivacyLabel(office.privacy) } : typesOptions[0],
            inactivityDays: inactivities ? inactivities
                .filter(inactivity => inactivity.type === "RECURRING_DAY")
                .map(inactivity => ({ value: inactivity.dayOfWeek, label: getDay(inactivity.dayOfWeek) }))
                : [],
            tablesQuantity: office ? office.table.quantity : 0,
            capacityPerTable: office ? office.table.capacity : 0,
            price: office ? office.price : 0,
            multipleSelectServ: null,
            multipleSelectEqu: null,
            description: office ? office.description : "",
            photo: "",
        },
        validate,
        onSubmit: async ({
            officeName,
            officeType,
            inactivityDays,
            tablesQuantity,
            capacityPerTable,
            price,
            description,
            photo,
        }) => {
            const officeFormData = {
                name: officeName,
                description: description,
                privacy: officeType.value,
                price: price,
                capacity: tablesQuantity * capacityPerTable,
                tablesQuantity: tablesQuantity,
                capacityPerTable: capacityPerTable,
                photo: photo,
                inactivityDays: inactivityDays.map(day => ({
                    type: "RECURRING_DAY",
                    dayOfWeek: day.value
                })),
            }
            onSubmit(officeFormData)
        },
    });

    return (
        <Container>
            <Form onSubmit={formik.handleSubmit} >
                <Card style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <CardBody>
                        <Row>
                            <Col xs="12" md="12" lg="6" xg="6" style={{ paddingLeft: 20, paddingRight: 20 }}>
                                <FormGroup className={formik.errors.officeName ? 'has-danger' : ''}>
                                    <Label htmlFor="officeName" className="label-form">Nombre</Label>
                                    <Input
                                        type="text"
                                        placeholder="Ingrese el nombre de la oficina"
                                        name="officeName"
                                        id="officeName"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.officeName}
                                    />
                                </FormGroup>


                                <FormGroup className={formik.errors.officeType ? 'has-danger' : ''}>
                                    <Label htmlFor="officeType" className="label-form">Tipo de oficina</Label>
                                    <Select
                                        className="react-select primary"
                                        classNamePrefix="react-select"
                                        name="officeType"
                                        id="officeType"
                                        value={formik.values.officeType}
                                        onChange={value => formik.setFieldValue("officeType", value)}
                                        onBlur={formik.handleBlur}
                                        options={typesOptions}

                                    />
                                    {formik.errors.officeType ? <Label className="error">{formik.errors.officeType}</Label> : <></>}
                                </FormGroup>

                                <FormGroup className={formik.errors.tablesQuantity ? 'has-danger' : ''}>
                                    <Label htmlFor="tablesQuantity" className="label-form">Cantidad de mesas</Label>
                                    <Input
                                        type="number"
                                        placeholder="Ingrese el número de mesas..."
                                        name="tablesQuantity"
                                        id="tablesQuantity"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        min={1}
                                        value={formik.values.tablesQuantity}
                                    />
                                </FormGroup>
                                <FormGroup className={formik.errors.capacityPerTable ? 'has-danger' : ''}>
                                    <Label htmlFor="capacityPerTable" className="label-form">Cantidad de personas por mesa</Label>
                                    <Input
                                        type="number"
                                        placeholder="Ingrese el número de personas por mesas"
                                        name="capacityPerTable"
                                        id="capacityPerTable"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        min={1}
                                        value={formik.values.capacityPerTable}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="inactivityDays" className="label-form">Dias no disponibles</Label>
                                    <Select
                                        className="react-select"
                                        classNamePrefix="react-select"
                                        placeholder="Seleccione días"
                                        name="inactivityDays"
                                        id="inactivityDays"
                                        closeMenuOnSelect={false}
                                        isMulti
                                        value={formik.values.inactivityDays}
                                        onChange={value => formik.setFieldValue("inactivityDays", value)}
                                        onBlur={formik.handleBlur}
                                        options={[
                                            {
                                                value: "",
                                                label: "Seleccione uno más días días",
                                                isDisabled: true
                                            },
                                            { value: "MONDAY", label: "Lunes" },
                                            { value: "TUESDAY", label: "Martes" },
                                            { value: "WEDNESDAY", label: "Miércoles" },
                                            { value: "THURSDAY", label: "Jueves" },
                                            { value: "FRIDAY", label: "Viernes" },
                                            { value: "SATURDAY", label: "Sábado" },
                                            { value: "SUNDAY", label: "Domingo" },
                                        ]}
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
                                            id="price"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            min={0}
                                            value={formik.values.price}
                                        />
                                    </InputGroup>
                                </FormGroup>

                                {/* <FormGroup className={formik.errors.multipleSelectServ ? 'has-danger' : ''} style={{ marginLeft: '4%' }}>
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
                                    </FormGroup> */}

                                <FormGroup className={formik.errors.description ? 'has-danger' : ''}>
                                    <Label htmlFor="description" className="label-form">Descripción</Label>
                                    <Input
                                        type="textarea"
                                        name="description"
                                        id="description"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.description}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Row className='photo' style={{ marginLeft: '0%' }}>
                                        <Label htmlFor="photo" className="label-form">Fotos</Label>
                                    </Row>
                                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                                        <ImageUpload onChange={imageData => formik.setFieldValue("photo", imageData)} avatar={office ? office.imageUrl : ""} />
                                    </Row>
                                </FormGroup>
                            </Col>

                        </Row>

                        <Row>
                            <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    className="btn btn-round btn-primary"
                                    color="primary"
                                    type="submit"
                                    disabled={formik.isSubmitting}>
                                    {confirmButtonName}
                                </Button>
                                <Button
                                    type="reset"
                                    className="btn btn-round btn-primary"
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
    );
}


OfficeForm.propTypes = {
    confirmButtonName: PropTypes.string.isRequired,
    office: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        privacy: PropTypes.string,
        description: PropTypes.string,
        table: PropTypes.shape({
            quantity: PropTypes.number,
            capacity: PropTypes.number,
        }),
        imageUrl: PropTypes.string,
    }),
    inactivities: PropTypes.shape({
        type: PropTypes.string,
        dayOfWeek: PropTypes.string,
        specificInactivityDay: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
}