import React from 'react'
import { Col, Row } from 'reactstrap';
import { Loading } from '../../../components/Loading/Loading';
import { OfficeBranchCreate } from '../../../components/OfficeBranch/OfficeBranchCreate';

export const CreateOfficeBranch = (props) => {
    const { error, loading } = props;

    return (
        <div className="content">
            <Row style={{ display: 'grid', paddingTop: 40 }}>
                <Col xs="12" md="6" lg="12" xg="12">
                    <h1>
                        Nueva <small color="red">Sucursal</small>
                    </h1>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6" lg="12" xg="12">
                    {loading ? <Loading /> :
                        <OfficeBranchCreate create={props.onCreate} error={error} />
                    }
                </Col>
            </Row>
        </div>
    )
};
