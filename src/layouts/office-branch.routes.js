import { OfficeBranchSelectContainer } from "../containers/backoffice/OfficeBranchSelectContainer";

export const routes = [
    {
        path: '/select',
        name: 'Select',
        component: OfficeBranchSelectContainer,
        layout: '/office-branch',
    },
];
