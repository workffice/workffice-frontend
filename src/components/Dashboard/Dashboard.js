import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { monthFilter, yearFilter } from '../../utils/filters';
import { DashboardGeneralCards } from "./DashboardGeneralCards.jsx";
import { DashboardIncomeStatistics } from "./DashboardIncomeStatistics.jsx";
import { DashboardOfficeBooking } from "./DashboardOfficeBooking.jsx";

function Dashboard({
  officeBranch,
  loadCollaborators,
  collaborators,
  loadOffices,
  offices,
  loadRevenuePerOffice,
  loadBookingsQuantityPerOffice,
  loadRevenuePerMonth,
  reports,
  revenuePerMonth,
  bookingsQuantityPerOffice,
  revenuePerOffice,
}) {
  let capacityTotal = 0;
  let collaboratorTotal = collaborators ? collaborators.length : 0;
  offices.map(office => capacityTotal += office.capacity)
  useEffect(() => {
    loadOffices()
    loadCollaborators()
  }, [officeBranch.id])

  return (
    <>

      <div className="content">
        <Row style={{ display: 'grid', paddingTop: 40 }}>
          <Col xs="12" md="6" lg="12" xg="12">
            <h1>
              Estadísticas <small color="red">Generales</small>
            </h1>
            <hr />
          </Col>
        </Row>
        <Container>
          <DashboardGeneralCards
            collaboratorTotal={collaboratorTotal}
            capacityTotal={capacityTotal}
            branch={officeBranch}
            currentYearRevenue={revenuePerMonth}
            loadRevenuePerMonth={loadRevenuePerMonth}
          />
        </Container>
        <Row>
          <Col xs="12" md="6" lg="12" xg="12">
            <h2>
              Ingresos de la<small color="red"> Sucursal</small>
            </h2>
            <hr />
          </Col>
        </Row>
        <DashboardIncomeStatistics
          monthFilter={monthFilter}
          yearFilter={yearFilter}
          revenuePerOffice={revenuePerOffice}
          revenuePerMonth={revenuePerMonth}
          loadRevenuePerMonth={loadRevenuePerMonth}
          loadRevenuePerOffice={loadRevenuePerOffice}
          offices={offices}
        />
        <Row>
          <Col xs="12" md="6" lg="12" xg="12">
            <h2>
              Reservas por<small color="red"> Oficinas</small>
            </h2>
            <hr />
          </Col>
        </Row>
        <DashboardOfficeBooking
          monthFilter={monthFilter}
          reports={reports}
          bookingsQuantityPerOffice={bookingsQuantityPerOffice}
          loadBookingsQuantityPerOffice={loadBookingsQuantityPerOffice}
          offices={offices}
        />
      </div>
    </>
  );
}

export default Dashboard;
