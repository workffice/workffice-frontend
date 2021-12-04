import { useFormik } from 'formik';
import React from 'react';
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import RatingIcon from '../RatingIcon';

export const NewReviews = ({ createReview }) => {
  const validate = values => {
    const errors = {};
    if (!values.comment) {
      errors.comment = "Requerido"
    }
    if (!values.renterEmail) {
      errors.renterEmail = 'Requerido'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.renterEmail)
    ) {
      errors.renterEmail = 'Dirección de email inválida.'
    }
    return errors;
  };

  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  const formik = useFormik({
    initialValues: {
      comment: "",
      renterEmail: "",
    },
    validate,
    onSubmit: async ({ officeId, rating, comment, renterEmail }) => {
      await createReview({
        officeId,
        rating,
        comment,
        renterEmail,
      });
    }
  })

  return (

    <div className="content">
      <Row style={{ display: 'grid', paddingTop: 40 }}>
        <Col xs="6" md="6" lg="12" xg="12">
          <h1>
            Nueva <small color="red">Reseña</small>
          </h1>
          <hr />
        </Col>
      </Row>

      <Row>
        <Form onSubmit={formik.handleSubmit} style={{ width: '80%', marginRight: '10%', marginLeft: '10%' }}>
          <Card style={{ width: '100%' }}>
            <CardBody>
              <div className="office-branch-card-title colaborator" style={{ display: 'block', marginTop: 0 }}>
                <div>
                  <FormGroup>
                    <Label
                      htmlFor="comment"
                      className="label-form"
                      style={{ fontSize: 20, color: '#081620' }}
                    >
                      Oficina
                    </Label>
                    <Input type="office" disabled defaultValue="Oficina A" />
                  </FormGroup>
                  <FormGroup>
                    <Row style={{paddingBottom: 10, paddingRight: 15, paddingLeft: 15, paddingTop: 15}}>
                        <Label
                          htmlFor="calification"
                          className="label-form"
                          style={{ fontSize: 20, color: '#081620' }}
                        >
                          Ingrese una calificación
                        </Label>
                        <div style={{ display: 'flex', width: 300, marginTop: 15 }}>
                          {[1, 2, 3, 4, 5].map((index) => {
                            return (
                              <RatingIcon
                                index={index}
                                rating={rating}
                                hoverRating={hoverRating}
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onSaveRating={onSaveRating}
                              />
                            )
                          })}
                        </div>
                    </Row>
                  </FormGroup>
                  <FormGroup className={formik.errors.comment && formik.touched.comment ? 'has-danger mb-3' : 'mb-3'}>
                    <Label
                      htmlFor="comment"
                      className="label-form"
                      style={{ fontSize: 20, color: '#081620' }}
                    >
                      Ingrese una reseña
                    </Label>
                    <Input
                      type="textarea"
                      className="form-control"
                      id="comment"
                      name='comment'
                      placeholder="Ingrese su reseña..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.comment}
                    />
                    {formik.errors.comment && formik.touched.comment ? (
                      <div className="error">{formik.errors.comment}</div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className={formik.errors.renterEmail && formik.touched.renterEmail ? 'has-danger mb-3' : 'mb-3'}>
                    <Label
                      htmlFor="renterEmail"
                      className="label-form"
                      style={{ fontSize: 20, color: '#081620' }}
                    >
                      Ingrese su email
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="renterEmail"
                      name='renterEmail'
                      placeholder="nombre@ejemplo.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.renterEmail}
                    />
                    {formik.errors.renterEmail && formik.touched.renterEmail ? (
                      <div className="error">{formik.errors.renterEmail}</div>
                    ) : null}
                  </FormGroup>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="col-auto">
                  <Button type="submit" className="btn-round btn-primary mb-3">Crear</Button>
                </div>
                <div className="col-auto">
                  <Button type="reset" className="btn-round btn-primary mb-3" style={{ backgroundColor: '#EB5D60' }}>Cancelar</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </Form>
      </Row>
    </div>
  )
};
