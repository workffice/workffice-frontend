
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
import { EmptyComponent } from "../../../components/Common/Empty/EmptyComponent";
import { Notification } from "../../../components/Common/Notification/Notification";
import { getErrorMessage } from "../../../utils/userTranslations";


export const UserProfile = ({
    userMe,
    onUpdate,
    collaborators,
    notification,
    hideNotification,
    loadCollaborators,
    officeBranch
}) => {
    React.useEffect(() => {
        loadCollaborators(officeBranch.id);
    }, [])
    const { name, bio } = userMe || {}
    React.useEffect(() => {
        if (notification.show)
            setTimeout(() => {
                hideNotification()
            }, 2000)
    })
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
                            <CardTitle tag="h4">Colaboradores de {officeBranch.name}</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <ul className="list-unstyled team-members">
                                {collaborators ? collaborators.map(collaborator => {
                                    return <CollaboratorRow key={collaborator.id} {...collaborator} />
                                }) : <EmptyComponent />}
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="8">
                    <Notification
                        show={notification.show && notification.isError}
                        isError={true}
                        message={getErrorMessage(notification.errorCode)}
                        hideNotification={hideNotification}
                    />
                    <Notification
                        show={notification.show && notification.isSuccess}
                        message="El usuario se actualizo correctamente"
                        hideNotification={hideNotification}
                    />
                    <UserUpdate update={onUpdate} {...userMe}></UserUpdate>
                </Col>
            </Row>
        </div>

    );
}

export default UserProfile;
