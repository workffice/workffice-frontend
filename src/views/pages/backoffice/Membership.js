import React from 'react'
import { Col, Row } from 'reactstrap'
import { MembershipListComponent } from '../../../components/Membership/MembershipListComponent'

export const Membership = () => {

    // const services = ['Comida', 'Confort', 'Conectividad'];
    // const equipamiento = ['Tecnología', 'Confort'];

    return (
        <div class= 'content'>
            <Row className='titleTop'>
                <Col xs="12" md="12" lg="12" xg="12">
                    <h1>
                        Nueva <small>Membresía</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <MembershipListComponent />
        </div>
    )
}
