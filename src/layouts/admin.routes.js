import { MembershipListComponent } from '../components/Membership/MembershipListComponent';
import { NewMembership } from '../components/Membership/NewMembership';
import { NewNotice } from '../components/Notice/NewNotice';
import { NoticeListComponent } from '../components/Notice/NoticeListComponent';
import { OfficeDetailComponent } from '../components/Offices/OfficeDetailComponent';
import { DashboardContainer } from '../containers/backoffice/DashboardContainer';
import { OfficeBookingContainer } from '../containers/backoffice/OfficeBookingContainer';
import { OfficeBranchDetailContainer } from '../containers/backoffice/OfficeBranchDetailContainer';
import { OfficeBranchEditContainer } from '../containers/backoffice/OfficeBranchEditContainer';
import { OfficeCreateContainer } from '../containers/backoffice/OfficeCreateContainer';
import { OfficeEditContainer } from '../containers/backoffice/OfficeEditContainer';
import { OfficesContainer } from '../containers/backoffice/OfficesContainer';
import { OfficesSearchContainer } from '../containers/backoffice/OfficesSearchContainer';
import { NewRoleContainer, RolesListContainer } from '../containers/backoffice/RoleContainer';
import { UserBookingListContainer, UserPastBookingListContainer } from '../containers/booking/BookingListContainer';
import { CollaboratorContainer, CollaboratorListContainer } from '../containers/CollaboratorContainer';
import FrequentQuestions from '../containers/FrecuentQuestions';
import { UserProfileContainer } from '../containers/UserProfileContainer';
import { ServicesEquipment } from '../views/pages/backoffice/ServicesEquipment';

export const routes = [
  {
    collapse: true,
    name: 'Perfil',
    icon: 'fa fa-user',
    state: 'profileCollapse',
    visibility: true,
    views: [
      {
        path: '/user-profile',
        name: 'Perfil Usuario',
        mini: 'PU',
        component: UserProfileContainer,
        layout: '/admin',
        visibility: true
      },
    ]
  },
  {
    collapse: true,
    name: 'Dashboard',
    icon: 'nc-icon nc-chart-bar-32',
    state: 'dashboardCollapse',
    visibility: true,
    views: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        mini: 'D',
        component: DashboardContainer,
        layout: '/admin',
        visibility: true
      },
    ]
  },
  {
    collapse: true,
    name: 'Sucursales',
    icon: 'fa fa-building',
    state: 'officebranchCollapse',
    visibility: true,
    views: [
      {
        path: '/office-branch',
        name: 'Mi sucursal',
        mini: 'MS',
        component: OfficeBranchDetailContainer,
        layout: '/admin',
        visibility: true,
      },
      {
        path: '/edit-officebranch',
        name: 'Editar Sucursal',
        mini: 'ES',
        layout: '/admin',
        visibility: true,
        component: OfficeBranchEditContainer,
      },
      {
        path: '/select',
        name: 'Cambiar Sucursal',
        mini: 'NS',
        layout: '/office-branch',
        visibility: true,
      },
    ]
  },
  {
    collapse: true,
    name: 'Oficinas',
    icon: 'fa fa-laptop',
    state: 'officesCollapse',
    visibility: true,
    views: [
      {
        path: '/offices',
        name: 'Oficinas',
        mini: 'O',
        component: OfficesContainer,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/new-office',
        name: 'Nueva oficina',
        mini: 'NO',
        component: OfficeCreateContainer,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/offices/edit',
        name: 'Editar oficina',
        mini: 'EO',
        component: OfficeEditContainer,
        layout: '/admin',
        visibility: false
      },
      {
        path: '/services-equipment',
        name: 'Servicios y equipamiento',
        mini: 'SE',
        component: ServicesEquipment,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/office-detail',
        // name: 'Detalle',
        // mini: 'SE',
        component: OfficeDetailComponent,
        layout: '/admin',
        visibility: true
      },
    ]
  },
  {
    collapse: true,
    name: 'Colaboradores',
    icon: 'fa fa-users',
    state: 'collaboratorsCollapse',
    visibility: true,
    views: [
      {
        path: '/collaborators',
        name: 'Colaboradores',
        mini: 'C',
        component: CollaboratorListContainer,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/new-collaborator',
        name: 'Nuevo colaborador',
        mini: 'NC',
        component: CollaboratorContainer,
        layout: '/admin',
        visibility: true
      }
    ]
  },
  {
    collapse: true,
    name: 'Buscar',
    icon: 'fa fa-search',
    state: 'officesSearchCollapse',
    visibility: true,
    views: [
      {
        path: '/search',
        name: 'Sucursales',
        mini: 'O',
        component: OfficesSearchContainer,
        layout: '/admin',
        visibility: true
      }
    ]
  },  
  {
    collapse: true,
    name: 'Reserva',
    icon: 'nc-icon nc-single-copy-04',
    state: 'bookingCollapse',
    visibility: true,
    views: [
      {
        path: '/bookings/list',
        name: 'Mis reservas',
        mini: 'LR',
        component: UserBookingListContainer,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/bookings/history',
        name: 'Reservas anteriores',
        mini: 'RA',
        component: UserPastBookingListContainer,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/create-booking',
        name: 'Reservar oficina',
        mini: 'RO',
        component: OfficeBookingContainer,
        layout: '/admin',
        visibility: false,
      },
    ]
  },  
  {
    collapse: true,
    name: 'Configuraciones',
    icon: 'fa fa-cog',
    state: 'configurationCollapse',
    visibility: true,
    views: [
      {
        path: '/roles',
        name: 'Gestionar Roles',
        mini: 'GR',
        component: RolesListContainer,
        layout: '/admin',
        visibility: true,
      },
      {
        path: '/new-rol',
        name: 'Nuevo Rol',
        mini: 'NR',
        component: NewRoleContainer,
        layout: '/admin',
      },
      {
        path: '/membership',
        name: 'Gestionar membresías',
        mini: 'GM',
        component: MembershipListComponent,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/new-membership',
        name: 'Nueva membresía',
        mini: 'NM',
        component: NewMembership,
        layout: '/admin',
      },
      {
        path: '/notice',
        name: 'Gestionar noticias',
        mini: 'GN',
        component: NoticeListComponent,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/new-notice',
        name: 'Nueva noticia',
        mini: 'NN',
        component: NewNotice,
        layout: '/admin',
      },
    ]
  },
  {
    name: 'Preguntas frecuentes',
    icon: 'nc-icon nc-bullet-list-67',
    path: '/frequent-questions',
    component: FrequentQuestions,
    layout: '/admin',
    visibility: true,
  },
];
