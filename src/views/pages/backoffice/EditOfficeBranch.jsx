import React from 'react'
import { Col, Row } from 'reactstrap';
import { OfficeBranchEdit } from '../../../components/OfficeBranch/OfficeBranchEdit';

export const EditOfficeBranch = ({ edit, notification, loading, officeBranch }) => {
    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Editar sucursal <small color="red">{officeBranch.name}</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6" lg="12" xg="12">
                    <OfficeBranchEdit
                        edit={edit}
                        officeBranch={officeBranch}
                        notification={notification}
                        loading={loading}
                    />
                </Col>
            </Row>
        </div>
    )
};
