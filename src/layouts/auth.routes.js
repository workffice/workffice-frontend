import { LoginContainer } from "../containers/LoginContainer";
import { RegisterContainer } from "../containers/RegisterContainer";
import { ConfirmationAccount } from "../views/pages/ConfirmationAccount";
import { RecoveryPasswordContainer } from "../containers/RecoveryPasswordContainer";


export const routes = [
    {
      path: '/login',
      name: 'Login',
      mini: 'L',
      component: LoginContainer,
      layout: '/auth',
    },
    {
      path: '/register',
      name: 'Register',
      mini: 'R',
      component: RegisterContainer,
      layout: '/auth',
    },
    {
      path: '/recovery-password',
      name: 'RecoveryPassword',
      mini: 'LS',
      component: RecoveryPasswordContainer,
      layout: '/auth',
    },
    {
      path: '/confirmation-account',
      name: 'ConfirmationAccount',
      mini: 'LS',
      component: ConfirmationAccount,
      layout: '/auth',
    },
];  