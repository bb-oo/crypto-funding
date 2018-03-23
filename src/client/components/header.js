import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  color: white;
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
  letter-spacing: 1px;
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
`;

const H4 = styled.h4`
  color: white;
  font-family: ${props => props.font};
  font-weight: ${props => props.weight};
  letter-spacing: 1px;
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
`;

const Header = ({ text, size, font, weight, ...props }) => {
  switch (size) {
    case 1: 
      return <H1 font={ font } weight={ weight } { ...props }>{ text }</H1>;
    case 4:
      return <H4 font={ font } weight={ weight } { ...props }>{ text }</H4>;
    default:
      throw new Error('Incorrect prop value for `size`="`%s`".', size);
  }
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isReuired,
  font: PropTypes.string,
  weight: PropTypes.string,
  mt: PropTypes.string,
  mb: PropTypes.string
};

export default Header;