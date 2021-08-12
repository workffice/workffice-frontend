import { OfficeBranch } from "../components/OfficeBranch/OfficeBranch";


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
      layout: '/auth',
    },
     
]  