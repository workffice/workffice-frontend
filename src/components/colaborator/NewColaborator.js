import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

export const NewColaborator = () => (
  <div className="content">
    <Row style={{ display: 'grid', paddingTop: 40 }}>
      <Col xs="6" md="6" lg="12" xg="12">
        <h1>
          Nuevo <small color="red">Colaborador</small>
        </h1>
        <hr />
      </Col>
    </Row>

    <Row>
      <Card style={{width: '100%'}}>
        <CardBody>
          <div className="office-branch-card-title colaborator" style={{ display: 'block'}}>
            <row>
              <div class="mb-3">
                <label for="nameColaborator" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nameColaborator" placeholder="Nombre del colaborador"/>
              </div>
              <div class="mb-3">
                <label for="emailColaborator" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailColaborator" placeholder="nombre@ejemplo.com"/>
              </div>
            </row>
          </div>
          <hr />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3">Aceptar</button>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3" style={{backgroundColor: '#EB5D60'}}>Cancelar</button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Row>
  </div>
);
