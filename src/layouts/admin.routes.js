import { Colaborators } from '../components/Colaborator/Colaborators';
import { NewColaborator } from '../components/Colaborator/NewColaborator';
import { OfficeBranch } from '../components/OfficeBranch/OfficeBranch';
import { NewOffice } from '../components/Offices/NewOffice';
import { OfficeDetailComponent } from '../components/Offices/OfficeDetailComponent';
import { OfficesListComponent } from '../components/Offices/OfficesListComponent';
import { CreateOfficeBranch } from '../views/pages/backoffice/CreateOfficeBranch';
import { ServicesEquipment } from '../views/pages/backoffice/ServicesEquipment';

export const routes = [
  {
    collapse: true,
    name: 'Sucursales',
    icon: 'fa fa-building',
    state: 'officebranchsCollapse',
    views: [
      {
        path: '/office-branch',
        name: 'Sucursales',
        mini: 'S',
        component: OfficeBranch,
        layout: '/admin',
      },
      {
        path: '/new-office-branch',
        name: 'Nueva Sucursal',
        mini: 'NS',
        component: CreateOfficeBranch,
        layout: '/admin',
      },
    ]
  },
  {
    collapse: true,
    name: 'Oficinas',
    icon: 'fa fa-laptop',
    state: 'officesCollapse',
    views: [
      {
        path: '/offices',
        name: 'Oficinas',
        mini: 'O',
        component: OfficesListComponent,
        layout: '/admin',
      },
      {
        path: '/new-office',
        name: 'Nueva oficina',
        mini: 'NO',
        component: NewOffice,
        layout: '/admin',
      },
      {
        path: '/services-equipment',
        name: 'Servicios y equipamiento',
        mini: 'SE',
        component: ServicesEquipment,
        layout: '/admin',
      },
      {
        path: '/office-detail',
        // name: 'Detalle',
        // mini: 'SE',
        component: OfficeDetailComponent,
        layout: '/admin',
      },
    ]
  },
  {
    collapse: true,
    name: 'Colaboradores',
    icon: 'fa fa-users',
    state: 'collaboratorsCollapse',
    views: [
      {
        path: '/colaborators',
        name: 'Colaboradores',
        mini: 'C',
        component: Colaborators,
        layout: '/admin',
      },
      {
        path: '/new-colaborator',
        name: 'Nuevo colaborador',
        mini: 'NC',
        component: NewColaborator,
        layout: '/admin',
      }
    ]
  }
];
