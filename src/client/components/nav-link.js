import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  display: inline-block;
  margin-right: 8px;
`;

const Nav = styled(Link)`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;

  &:hover {
    text-decoration: none;
    color: rgba(0, 0, 0, 1);
  }

  &:visited {
    color: rgb(0, 0, 0, 0.6);
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