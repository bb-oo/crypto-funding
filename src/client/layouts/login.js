import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

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

const Login = ({ header, subHeader, text, path, linkText, children, ...props }) => (
  <Wrapper>
    <MainHeader>{ header }</MainHeader>
    <SubHeader>{ subHeader }</SubHeader>
    { children }
    <Text>{ text } <NavLink path={ path }>{ linkText }</NavLink></Text>
  </Wrapper>
);

Login.propTypes = {
  header: PropType.string.isRequired,
  subHeader: PropType.string,
  children: PropType.element.isRequired,
  text: PropType.string.isRequired,
  path: PropType.string.isRequired,
  linkText: PropType.string.isRequired
};
  
export default Login;
