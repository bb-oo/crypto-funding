import React, { Fragment } from 'react';

import { NavBar, Jumbo } from '../components/index';

const Home = props => {
  return (
    <Fragment>
      <NavBar/>
      <Jumbo bg="linear-gradient(to right, #4b74b3, #4f4f8d)">
      </Jumbo>
    </Fragment>
  )
}

export default Home;