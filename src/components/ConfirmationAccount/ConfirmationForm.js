import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from 'reactstrap';
import logo from '../../assets/img/Recurso 4.png';

export const ConfirmationForm = () => {
  return (
    <>
      <Card>
        <CardHeader className="card-signup text-center">
          <CardTitle tag="h3">Confirmar cuenta</CardTitle>
        </CardHeader>
        <CardBody className="text-center">
          <CardText>¡Gracias por registrarte!</CardText>
          <CardText>
            Te hemos enviado un link de confirmación a tu correo.
          </CardText>
        </CardBody>
        <CardFooter>
          <p className="text-center">
            <img className="" width="40%" src={logo}></img>
          </p>
        </CardFooter>
      </Card>
    </>
  );
};
