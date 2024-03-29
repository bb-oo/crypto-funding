import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 0.833em 2em;
  font: inherit;
  border-radius: 2px;
  color: white;
  background-color: #545a6a;
  cursor: pointer;

  &:hover {
    background-color: #4e5d84;
  }
`;

export default Button;