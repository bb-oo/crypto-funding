import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
`;

const Nav = styled(Link)`
  color: rgb(218, 225, 233);

  &:hover {
    text-decoration: none;
    color: rgb(0, 0, 0);
  }

  &:visited {
    color: rgb(218, 225, 233);
  }
`;

const NavLink = ({ path, text }) => {
  return (
    <NavWrapper>
      <Nav to={path}>{text}</Nav>
    </NavWrapper>
  );
};

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavLink;