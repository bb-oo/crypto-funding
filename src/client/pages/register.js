import React from 'react';
import styled from 'styled-components';

import RegisterForm from '../registration/register';
import NavLink from '../components/nav-link';

const Wrapper = styled.div`
margin: 0 auto;
background-color: #f0f4f5;
width: 100%; 
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const MainHeader = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

const SubHeader = styled.h4`
  margin-top: -15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: #363b4a;
`;

const Text = styled.p`
  margin-top: 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  color: #363b4a;
`;

const Register = () => (
  <Wrapper>
    <MainHeader>Create Account</MainHeader>
    <SubHeader>Sign up for Backers FundMe</SubHeader>
    <RegisterForm/>
    <Text>Already have an account? <NavLink path="/signin">Sign In</NavLink></Text>
  </Wrapper>
);
  
export default Register;
