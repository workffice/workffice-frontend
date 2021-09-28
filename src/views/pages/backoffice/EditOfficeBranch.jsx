import React from 'react'
import { Col, Row } from 'reactstrap';
import { OfficeBranchEdit } from '../../../components/OfficeBranch/OfficeBranchEdit';

export const EditOfficeBranch = (props) => {
    const { error, loading, officeBranch } = props;
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

                    <OfficeBranchEdit edit={props.edit} officeBranch={officeBranch} error={error} loading={loading} />

                </Col>
            </Row>
        </div>
    )
};
