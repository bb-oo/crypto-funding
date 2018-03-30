import React from 'react';
import styled from 'styled-components';

import RegisterForm from '../registration/register';
import Login from '../layouts/login';

const data = {
  header: 'Create Account',
  subHeader: 'Sign up for Backers FundMe',
  text: 'Already have an account?',
  path: '/signin',
  linkText: 'Sign In'
};

const Register = () => (
  <Login { ...data }>
    <RegisterForm/>
  </Login>
);
  
export default Register;
