import React, { Fragment } from 'react';

import { NavBar, Jumbo, Header } from '../components/index';

const Home = props => {
  return (
    <Fragment>
      <NavBar/>
      <Jumbo bg="linear-gradient(to right, #4b74b3, #4f4f8d)">
        <Header text="Invest for your future." font="Open Sans, sans-serif" weight="400" size={ 1 } mt="185px"/>
        <Header text="Backers FundMe is a revolutionary platform that enables you to campaign with cryptocurrencies." font="Open Sans, sans-serif" weight="400" size={ 4 }/>
      </Jumbo>
    </Fragment>
  )
}

export default Home;