import React from 'react'
import { Card, CardBody } from 'reactstrap'

export const OfficeRentList = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <img className="office-branch-card-image" src={image} />
                    <div className="office-branch-card-title" style={{ marginTop: 30 }}>
                        <h5 style={{ marginBottom: 0 }}>
                            {name}
                        </h5>
                        <i className="fa fa-heart" style={{ display: 'flex', alignItems: 'center' }} />
                    </div>
                    <hr />
                    <div className='text'>
                        <label className="form-label">
                            Tipo de oficina: <small>{privacy === 'SHARED' ? 'Compartida' : 'Privada'}</small>
                        </label>
                    </div>

                    <div className='text'>
                        <label className="form-label">
                            Precio p/hora:  <small>{`$ ${price}`}</small>
                        </label>
                    </div>

                    <div className='text'>
                        <label className="form-label">
                            Sucursal: <small>{officeBranch.name}</small>
                        </label>
                        <label className="form-label">
                            Teléfono: <small>{officeBranch.phone}</small>
                        </label>
                    </div>
                </CardBody>
            </Card>

        </>
    )
}
