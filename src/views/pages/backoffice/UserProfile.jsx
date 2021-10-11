
import React from "react";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

import avatar from "../../../assets/img/faces/erik-lucatero-2.jpg"
import image from "../../../assets/img/faces/erik-lucatero-1.jpg"
import { UserUpdate } from "../../../components/User/UserUpdate";
import CollaboratorRow from "./CollaboratorRow";
import { EmptyComponent } from "../../../components/Empty/EmptyComponent";

export const UserProfile = props => {
    React.useEffect(() => {
        console.log(props.officeBranch.id)
        props.loadCollaborators(props.officeBranch.id);
    }, [])
    const { name, bio } = props.userMe || {}
    return (
        <div className="content">
            <Row style={{ paddingTop: 30 }}>
                <Col md="4">
                    <Card className="card-user">
                        <div className="image">
                            <img
                                alt="..."
                                src={image}
                            />
                        </div>
                        <CardBody>
                            <div className="author">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        className="avatar border-gray"
                                        src={avatar}
                                    />
                                    <h5 className="title">{name || "N/A"}</h5>
                                </a>
                            </div>
                            <p className="description text-center">{bio}</p>
                        </CardBody>
                        <CardFooter>
                            <hr />
                            <div className="button-container">
                                <Row>
                                    <Col className="ml-auto" lg="4" md="6" xs="6">
                                        <h5>
                                            4 <br />
                                            <small>Sucursales</small>
                                        </h5>
                                    </Col>
                                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                        <h5>
                                            3 <br />
                                            <small>Oficinas</small>
                                        </h5>
                                    </Col>
                                    <Col className="mr-auto" lg="4">
                                        <h5>
                                            8.5 <br />
                                            <small>Valoración</small>
                                        </h5>
                                    </Col>
                                </Row>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h4">Equipo de trabajo</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-unstyled team-members">
                                {props.collaborators ? props.collaborators.map(collaborator => {
                                    return <CollaboratorRow {...collaborator} />
                                }) : <EmptyComponent />}
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <UserUpdate update={props.onUpdate} {...props.userMe}></UserUpdate>
                </Col>
            </Row>
        </div>

    );
}

export default UserProfile;
