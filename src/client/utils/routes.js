import Home from '../pages/home';
import Register from '../pages/register';

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
  }
];

export default routes;