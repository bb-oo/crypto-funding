import React from 'react';

import SignInForm from '../authentication/signin';
import Login from '../layouts/login';

const data = {
  header: 'Sign In',
  subHeader: 'Login to your Backers FundMe account',
  text: 'Don\'t have an account?',
  path: '/signup',
  linkText: 'Sign Up'
}

const SignIn = () => {
  return (
    <Login { ...data }>
      <SignInForm/>
    </Login>
  );
};

export default SignIn;