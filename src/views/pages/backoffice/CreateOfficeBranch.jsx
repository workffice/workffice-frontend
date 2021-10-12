import React from 'react'
import { Col, Row } from 'reactstrap';
import { Loading } from '../../../components/Common/Loading/Loading';
import { OfficeBranchCreate } from '../../../components/OfficeBranch/OfficeBranchCreate';

export const CreateOfficeBranch = ({notification, loading, onCreate}) => {

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
                    {loading ? <Loading style={{display:'flex', justifyContent:'center'}}/> :
                        <OfficeBranchCreate create={onCreate} notification={notification} />
                    }
                </Col>
            </Row>
        </div>
    )
};
