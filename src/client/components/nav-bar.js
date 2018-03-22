import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavLink from './nav-link';

const NavWrapper = styled.nav`
  flex-shrink: 0;
  height: 54px;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
`;

const NavLeft = styled.div`
  float: left;
  display: inline-block;
  box-sizing: border-box;
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

const registered = [

];

export const NavBar = ({ username }) => {
  return (
    <NavWrapper>
      <FlexWrapper>
        <NavLeft>
          <Logo href="/" src="backers-logo-small.png"/>
        </NavLeft>
        <NavRight>
          { username ?  registered : notRegistered }
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
  return { username: session ? session.username : false }
};

export default connect(mapStateToProps)(NavBar);