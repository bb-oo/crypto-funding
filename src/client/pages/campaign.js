import React from 'react';

import CampaignForm from '../campaign/campaign';
import { NavBar } from '../components/index';

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

const Campaign = () => {
  return (
    <React.Fragment>
      <NavBar/>
      <Wrapper>
        <MainHeader>Create Your New Campaign</MainHeader>
        <CampaignForm/>
      </Wrapper>
    </React.Fragment>
  );
};

export default Campaign;