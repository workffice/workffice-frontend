import { Colaborators } from '../components/Colaborator/Colaborators';
import { NewOffice } from '../components/Offices/NewOffice';
import { OfficeDetailComponent } from '../components/Offices/OfficeDetailComponent';
import { OfficesListComponent } from '../components/Offices/OfficesListComponent';
import { OfficeBranchContainer } from '../containers/backoffice/OfficeBranchContainer';
import { OfficeBranchCreateContainer } from '../containers/backoffice/OfficeBranchCreateContainer';
import { ColaboratorContainer } from '../containers/ColaboratorContainer';
import { EditOfficeBranch } from '../views/pages/backoffice/EditOfficeBranch';
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
        component: OfficeBranchContainer,
        layout: '/admin',
      },
      {
        path: '/office-branch:id',
        name: 'Editar Sucursal',
        mini: 'S',
        component: EditOfficeBranch,
        layout: '/admin',
      },
      {
        path: '/create-officebranch',
        name: 'Nueva Sucursal',
        mini: 'NS',
        component: OfficeBranchCreateContainer,
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
        component: ColaboratorContainer,
        layout: '/admin',
      }
    ]
  }
];
