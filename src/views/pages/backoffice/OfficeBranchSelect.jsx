
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import { OfficeBranchCardSelect } from '../../../components/OfficeBranch/OfficeBranchCardSelect'

export const OfficeBranchSelect = (props) => {
    const officeBranches = useSelector(state => state.officeBranches)
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
                        <Button className="btn-round" color="danger">
                            <Link to="/admin/create-officebranch" style={{ color: 'white', textDecoration: 'none' }}>

                                {' '}
                                <i className="fa fa-plus" /> Nueva Sucursal
                            </Link>
                        </Button>
                    </Col>
                    <Col className="ml-auto mr-auto" xg="12" lg="12" md="12" style={{ display: "flex", flexWrap: "wrap" }}>
                        {
                            officeBranches
                                ? officeBranches.data.map(branch => <><Col xs="10" md="4" lg="4" xg="4"> <OfficeBranchCardSelect key={branch.id} branch={branch} /> </Col></>)
                                : <Link to="/admin/create-officebranch"></Link>
                        }
                    </Col>
                </Row>
                <Row >


                </Row>
            </Container>

            <div
                className={props.loading ? 'background-loading' : 'full-page-background'}
                style={{
                    background: '#34b18a',
                }}
            />
        </div >
    )
}
