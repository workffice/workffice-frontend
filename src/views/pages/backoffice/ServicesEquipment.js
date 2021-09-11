import React from 'react'
import { Col, Row } from 'reactstrap'
import { ServEquipComponent } from '../../../components/ServicesEquip/ServEquipComponent'

export const ServicesEquipment = () => {

    // const services = ['Comida', 'Confort', 'Conectividad'];
    // const equipamiento = ['Tecnología', 'Confort'];

    const services= [
        {
            value: 'comida',
            name: 'Comida',
        },
        {
            value: 'confort',
            name: 'Confort',
        },
        {
            value: 'conectividad',
            name: 'Conectividad',
        },
    ];

    const equipamiento= [
        {
            value: 'tecnologia',
            name: 'Tecnología',
        },
        {
            value: 'confort',
            name: 'Confort',
        },
    ]; 

    return (
        <div class= 'content'>
            <Row className='titleTop'>
                <Col xs="12" md="12" lg="12" xg="12">
                    <h1>
                        Crear <small>servicios y equipamiento</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <ServEquipComponent title='Servicios' typeName='servicio' elements={services} key={services.toString()}/>
            <ServEquipComponent title='Equipamiento' typeName='equipamiento' elements={equipamiento} key={equipamiento.toString()}/>
        </div>
    )
}
