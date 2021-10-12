import React from 'react';
import { Card, CardBody } from 'reactstrap';
import './styles/NoticeComponent.css';

export const NoticeComponent = (props) => {

  const { notice } = props;
  const { name, subject, date, body, active} = notice;

  const isActive = active === true;

  return (
    <>
      <Card style={{marginRight: '5%'}}>
        <CardBody>
          <div className="office-branch-card-title">
            <h5 style={{ marginBottom: 0 }}>
              {name} - <label style={{color: "#34B18A"}}>{subject}</label>
            </h5>
            {
              isActive 
                ? <label style={{ display: 'flex', alignItems: 'center', color:"#34b18a"}}>Activo</label>
                : <label style={{ display: 'flex', alignItems: 'center', color:"#eb5d60" }}>Inactivo</label>
            }
          </div>
          <hr />
          <div>
            <label>
              {body}
            </label>
          </div>
          <hr />
          <div className='text'>
            <label className="form-label" style={{fontSize: 12}}>
              Fecha creación: <small style={{fontSize: 12}}>{`${date}`}</small>
            </label>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
