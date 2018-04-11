import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/fontawesome-free-solid';
import SearchBar from './search-bar';

import NavLink from './nav-link';

const NavWrapper = styled.nav`
  flex-shrink: 0;
  height: 74px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

const NavLeft = styled.div`
  float: left;
  display: inline-block;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const NavRight = styled.div`
  float: right;
  display: inline-block;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 140px;

  &:hover {
    cursor: pointer;
  }
`;

const notRegistered = [
  <NavLink key={1} path="/signin" text="Sign In"/>,
  <NavLink key={2} path="/signup" text="Sign Up"/>
];

export const NavBar = ({ session }) => {
  return (
    <NavWrapper>
      <FlexWrapper>
        <NavLeft>
          <NavLink path="/"><Logo src="backers-logo-small.png"/></NavLink>
          <SearchBar/>
        </NavLeft>
        <NavRight>
          { session.loggedIn ?  [ <NavLink path="/campaign">Start a Campaign</NavLink>, <NavLink path="/">{ session.username }  <FontAwesomeIcon icon={ faCog }/></NavLink> ] : notRegistered }
        </NavRight>
      </FlexWrapper>
    </NavWrapper>
  );
};

NavBar.propTypes = {
  username: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired
};

const mapStateToProps = ({ session }) => {
  return { session }
};

export default connect(mapStateToProps)(NavBar);