import { Colaborators } from '../components/Colaborator/Colaborators';

import { OfficeDetailComponent } from '../components/Offices/OfficeDetailComponent';
// import { OfficesListComponent } from '../components/Offices/OfficesListComponent';
import { NewRol } from '../components/Rol/NewRol';
// import { OfficesListComponent } from '../components/Offices/OfficesListComponent';
import { OfficeBranchContainer } from '../containers/backoffice/OfficeBranchContainer';
import { OfficeBranchCreateContainer } from '../containers/backoffice/OfficeBranchCreateContainer';
import { OfficeCreateContainer } from '../containers/backoffice/OfficeCreateContainer';
import { OfficesContainer } from '../containers/backoffice/OfficesContainer';
// import { OfficeBranchEditContainer } from '../containers/backoffice/OfficeBranchEditContainer';
import { ColaboratorContainer } from '../containers/ColaboratorContainer';
import { ServicesEquipment } from '../views/pages/backoffice/ServicesEquipment';
import UserProfile from '../views/pages/backoffice/UserProfile';

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
        component: UserProfile,
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
        component: OfficeBranchCreateContainer,
        layout: '/admin',
        visibility: false
      },
      {
        path: '/select',
        name: 'Cambiar Sucursal',
        mini: 'NS',
        component: OfficeBranchCreateContainer,
        layout: '/office-branch',
        visibility: true
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
        path: '/colaborators',
        name: 'Colaboradores',
        mini: 'C',
        component: Colaborators,
        layout: '/admin',
        visibility: true
      },
      {
        path: '/new-colaborator',
        name: 'Nuevo colaborador',
        mini: 'NC',
        component: ColaboratorContainer,
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
        path: '/new-rol',
        name: 'Nuevo Rol',
        mini: 'NR',
        component: NewRol,
        layout: '/admin',
        visibility: true,
      },
    ]
  }
];
