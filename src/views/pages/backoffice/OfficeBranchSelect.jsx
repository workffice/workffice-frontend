
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import { EmptyOfficeBranch } from '../../../components/OfficeBranch/EmptyOfficeBranch'
import { OfficeBranchCardSelect } from '../../../components/OfficeBranch/OfficeBranchCardSelect'

export const OfficeBranchSelect = (props) => {

    const [selected, setSelected] = useState(false)
    const onSelect = officeBranchId => {
        props.selectOfficeBranch(officeBranchId)
        setSelected(true)
    }
    return (
        <div className="login-page">
            <Container style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
                alignContent: "space-around"
            }}>
                <Row
                >
                    <Col className="" xg="12" lg="12" md="12" style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }}>
                        <h1 style={{ color: '#FFFF' }}>Selecione Sucursal</h1>
                        <hr />
                        <Button className="btn-round" color="danger">
                            <Link to="/admin/create-officebranch" style={{ color: 'white', textDecoration: 'none' }}>

                                {' '}
                                <i className="fa fa-plus" /> Nueva Sucursal
                            </Link>
                        </Button>
                    </Col>
                    <Col className="ml-auto mr-auto" xg="12" lg="12" md="12" style={{ display: "flex", flexWrap: "wrap" }}>
                        {
                            props.branches
                                ? props.branches.map(branch =>
                                    <Col key={branch.id} xs="10" md="4" lg="4" xg="4">
                                        <OfficeBranchCardSelect
                                            branch={branch}
                                            select={onSelect}
                                            selected={selected}
                                            currentOfficeBranch={props.currentOfficeBranch}
                                        />
                                    </Col>
                                )
                                : <EmptyOfficeBranch />
                        }
                    </Col>
                </Row>
            </Container>

            <div
                className='full-page-background'
                style={{
                    background: '#34b18a',
                }}
            />
        </div >
    )
}
