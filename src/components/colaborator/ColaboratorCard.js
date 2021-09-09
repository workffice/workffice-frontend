import React from 'react';
import { Col } from 'reactstrap';

export const ColaboratorCard = () => (
  <>
    <div className='card-user card'>
      <div style={{ position: 'relative' }}>
        <div className='image' id='image' style={{ position: 'absolute' }}>
          <img alt='...' src='https://demos.creative-tim.com/paper-dashboard-pro-react/static/media/damir-bosnjak.efcaca50.jpg' />
        </div>
        <div>
          <td
            className='td-actions text-right'
            style={{
              alignItems: 'flex-end',
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
            <button type='button' id='tooltip570363224' title class="btn-round btn-icon btn-icon-mini btn-neutral btn btn-danger" style={{ marginRight: 5 }}>
              <i className='nc-icon nc-simple-remove'></i>
            </button>
          </td>
        </div>
      </div>
      <div className='card-body' style={{ minHeight: 100 }}>
        <div className='author' style={{ marginTop: -20 }}>
          <a href='#alguien' style={{ textDecoration: 'none' }}>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <div
                className='avatar border-gray'
                style={{
                  width: 124,
                  height: 124,
                  position: 'relative',
                  backgroundColor: '#34B18A',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  display: 'flex',
                }}>
                <h1 style={{
                  justifyContent: 'center',
                  marginBottom: 0,
                  fontSize: 60,
                  color: 'white',
                }}>C</h1>
              </div>
            </div>
          </a>
          <a href='#alguien' style={{ textDecoration: 'none' }}>
            <h5>Colaborador 1</h5>
          </a>
          <p className='description'>colab1@gmail.com</p>
        </div>
      </div>
      <div className='card-footer'>
        <hr />
        <div className='button-container'>
          <Col>
            <div className='ml-auto col-sm-12 col-12 col-md-12 col-lg-12'>
              <h5>
                <br />
                <small>Rol</small>
              </h5>
            </div> 
            <select class="form-select"
                style={{
                  backgroundColor: 'white',
                  border: 'thin #E3E3E3',
                  borderBottom: 'solid #E3E3E3',
                  height: 35,
                  // borderRadius: 8,
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderWidth: 2, 
                }}
              >
                <option selected>Supervisor</option>
                <option value="Pendiente">Administrativo</option>
            </select>           
          </Col>
          <Col>
            <div className='ml-auto col-sm-12 mr-auto col-12 col-md-12 col-lg-12'>
              <h5>
                <br />
                <small>Estado</small>
              </h5>
            </div> 
            <select class="form-select"
                style={{
                  backgroundColor: 'white',
                  border: 'thin #E3E3E3',
                  borderBottom: 'solid #E3E3E3',
                  height: 35,
                  // borderRadius: 8,
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderWidth: 2, 
                }}
              >
                <option selected>Activo</option>
                <option value="Pendiente">Pendiente</option>
              </select>                         
          </Col>
        </div>
      </div>
    </div>
  </>
);
