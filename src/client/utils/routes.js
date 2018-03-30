import Home from '../pages/home';
import Register from '../pages/register';
import SignIn from '../pages/signin';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/signup',
    exact: true,
    component: Register
  },
  {
    path: '/signin',
    exact: true,
    component: SignIn
  }
];

export default routes;