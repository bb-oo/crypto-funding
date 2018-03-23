import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.div`
  background-image: ${props => props.bg};
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: middle;
  flex-direction: column;
`;

const Jumbo = ({ bg, children, ...props }) => {
  return (
    <Background bg={ bg }>
      { children }
    </Background>
  );
};

export default Jumbo;