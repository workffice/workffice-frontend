import { MembershipListComponent } from '../components/Membership/MembershipListComponent';
import { NewMembership } from '../components/Membership/NewMembership';
import { NewNotice } from '../components/Notice/NewNotice';
import { NoticeListComponent } from '../components/Notice/NoticeListComponent';
import { OfficeBooking } from '../components/OfficeBooking/OfficeBooking';
import { OfficeDetailComponent } from '../components/Offices/OfficeDetailComponent';
import { OfficeBranchContainer } from '../containers/backoffice/OfficeBranchContainer';
import { OfficeBranchCreateContainer } from '../containers/backoffice/OfficeBranchCreateContainer';
import { OfficeBranchEditContainer } from '../containers/backoffice/OfficeBranchEditContainer';
import { OfficeCreateContainer } from '../containers/backoffice/OfficeCreateContainer';
import { OfficesContainer } from '../containers/backoffice/OfficesContainer';
import { OfficesSearchContainer } from '../containers/backoffice/OfficesSearchContainer';
import { NewRoleContainer, RolesListContainer } from '../containers/backoffice/RoleContainer';
import { CollaboratorContainer, CollaboratorListContainer } from '../containers/CollaboratorContainer';
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
    name: 'Sucursales',
    icon: 'fa fa-building',
    state: 'officebranchCollapse',
    visibility: true,
    views: [
      {
        path: '/office-branch',
        name: 'Ver sucursales',
        mini: 'S',
        component: OfficeBranchContainer,
        layout: '/admin',
        visibility: false
      },
      {
        path: '/create-officebranch',
        name: 'Nueva Sucursal',
        mini: 'NS',
        layout: '/admin',
        visibility: true,
        component: OfficeBranchCreateContainer,
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
    name: 'Búscar',
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
    collapse: true,
    name: 'Reserva',
    icon: 'fa fa-cog',
    state: 'configurationCollapse',
    visibility: true,
    views: [
      {
        path: '/booking',
        name: 'Reservar oficina',
        mini: 'RO',
        component: OfficeBooking,
        layout: '/admin',
        visibility: true,
      },
    ]
  }
];
