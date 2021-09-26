import React from 'react'
import { Col, Row } from 'reactstrap';
import { OfficeBranchEdit } from '../../../components/OfficeBranch/OfficeBranchEdit';

export const EditOfficeBranch = (props) => {
    const { error, loading } = props;
    const name = 'Sede Central';
    const officeBranch={
        name: 'Torre Emilia',
        province: 'Mendoza',
        city: 'Ciudad',
        street: 'Bolougne Sur Mer 1126',
        postalCode: '5584',
        phone: '261454568',
        description: 'Oficinas amplias y luminosas, con aire acondicionadao y un patio de comidas y buffete'
    }
    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Editar sucursal <small color="red">{name}</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6" lg="12" xg="12">

                    <OfficeBranchEdit edit={props.onEdit} officeBranch={officeBranch} error={error} loading={loading} />

                </Col>
            </Row>
        </div>
    )
};
