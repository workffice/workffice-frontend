import { useFormik } from 'formik';
import React from 'react'
import { Button, Card, CardBody, Form, Input, Row } from 'reactstrap';
import './styles/ServEquipComponentStyles.css';

export const ServEquipComponent = ({ title, typeName, elements }) => {

    const formik = useFormik({
        initialValues: {
            elementName: '',
            elementSelected: '',
        },
        onSubmit: async (credentials) => {
            //   await props.onLogin(credentials);
            //   history.push('/admin/office-branch');
            console.log('credential: ', credentials);
        },
    });

    const itemSelector = elements.map((element) =>
        <>
            <option>
                {element.name}
            </option>
        </>
    );

    return (
        <div className='content'>
            <Row>
                <Form className='formContainer' onSubmit={formik.handleSubmit}>
                    <Card className='cardContainer' style={{width: '80%', marginRight: '10%', marginLeft: '10%'}}>
                        <CardBody>
                            <div className='elementsTitleContainer'>
                                <h2>{title}</h2>
                            </div>
                            <div className='elementsInformationContainer'>
                                <div className='elementsTypeContainer'>
                                    <div className='type-element-name'>
                                        <label for="nameElement" className="form-label">{`Tipo de ${typeName}`}</label>
                                    </div>
                                    <row className='row-form-select'>
                                        <select
                                            className="form-select"
                                            name='elementSelected'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.elementSelected}
                                            placeholder={`Seleccione el tipo de ${typeName}`}
                                        >
                                            <option className='value-select' defaultValue>{`Seleccione el tipo de ${typeName}`}</option>
                                            {itemSelector}
                                        </select>
                                    </row>
                                </div>
                                <div className='elementsNameContainer'>
                                    <div className='element-name'>
                                        <label for="nameOffice" className="form-label">{`Nombre del ${typeName}`}</label>
                                        <Input
                                            name='elementName'
                                            type="text"
                                            placeholder={`Ingrese el nombre del ${typeName}`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.elementName}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='buttonContainer'>
                                <div class="col-auto">
                                    <Button
                                        block
                                        className="btn-round btn-primary mb-3"
                                        type="submit"
                                    >
                                        Crear
                                    </Button>
                                </div>
                                <div class="col-auto">
                                    {/* <button type="reset" class="btn btn-primary mb-3" style={{ backgroundColor: '#EB5D60' }}>Cancelar</button> */}
                                    <Button
                                        block
                                        className="btn-round btn-primary mb-3"
                                        type="reset"
                                        color="danger"
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
    )
}
