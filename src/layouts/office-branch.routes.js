// import { OfficeBranchEditContainer } from "../containers/backoffice/OfficeBranchEditContainer";
import { OfficeBranchSelectContainer } from "../containers/backoffice/OfficeBranchSelectContainer";
// import { OfficeBranchCreateContainer } from '../containers/backoffice/OfficeBranchCreateContainer';

export const routes = [
    {
        path: '/select',
        name: 'Select',
        component: OfficeBranchSelectContainer,
        layout: '/office-branch',
    },
    // {
    //     path: '/create',
    //     name: 'Nueva Sucursal',
    //     mini: 'NS',
    //     layout: '/office-branch',
    //     component: OfficeBranchCreateContainer
    // },
    // {
    //     path: '/edit',
    //     name: 'Edit',
    //     component: OfficeBranchEditContainer,
    //     layout: '/office-branch',
    // },
];