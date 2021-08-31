import { ColaboratorScreen } from '../components/colaborator/ColaboratorScreen';
import { NewColaborator } from '../components/colaborator/NewColaborator';
import { OfficeBranch } from '../components/OfficeBranch/OfficeBranch';

export const routes = [
  {
    path: '/office-branch',
    name: 'Sucursales',
    component: OfficeBranch,
    layout: '/admin',
  },
  {
    path: '/offices',
    name: 'Offices',
    //   component: Office,
    layout: '/admin',
  },
  {
    path: '/colaborators',
    name: 'Colaboradores',
      component: ColaboratorScreen,
    layout: '/admin',
  },
  {
    path: '/newColaborator',
    name: 'Nuevo colaborador',
      component: NewColaborator,
    layout: '/admin',
  }
];
