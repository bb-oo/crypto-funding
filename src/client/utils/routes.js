import Home from '../pages/home';
import Register from '../pages/register';
import SignIn from '../pages/signin';
import Campaign from '../pages/campaign';

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
  },
  {
    path: '/new/campaign',
    exact: true,
    component: Campaign
  }
];

export default routes;