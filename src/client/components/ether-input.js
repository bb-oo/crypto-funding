import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/fontawesome-free-solid';
import { faEthereum } from '@fortawesome/fontawesome-free-brands';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  min-height: 70px;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #c1c5cc;
  background-color: #e5f0ff;

  input {
    padding: 18px 15px 0 15px;
    background-color: transparent;
    border: 0px solid;
    outline: none;
    box-shadow: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 0.7px;
    color: #363b4a;
    font-size: 16px;
    height: 70px;
    width: 230px;
  }

  & input::placeholder {
    font-size: 16px;
  }

  & input:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;

const InputLeft = styled.div`
  display: inline-block;
  float: left;
  padding-left: 0.4em;
`;

const InputRight = styled.div`
  display: inline-block;
  float: right;
  padding-right: 0.4em;
`;

const EthereumLogo = styled(FontAwesomeIcon)`
  color: #8c8f93;
`;

const GreenIcon = styled(FontAwesomeIcon)`
  color: #00FA9A;
`;

const RedIcon = styled(FontAwesomeIcon)`
  color: #FE532E;
`;

const ErrorWrapper = styled.div`
  position: absolute;
  display: inline-block;
  display: flex;
  background-color: #f16767;
  min-height: 70px;
  width: 140px;
  font-family: inherit;
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
  align-items: center;
  justify-content: center;
  margin-left: 300px;
  padding: 5px;
`;

const EtherInput = ({ input, meta, ...props }) => {
  return (
    <Wrapper>
      <InputLeft>
        <EthereumLogo icon={ faEthereum }/>
      </InputLeft>
      <input step=" 0.000001" { ...input } { ...{ ...props } }/>
      <InputRight>
      {(() => {
        if ((meta.touched && meta.error) || (meta.dirty && meta.error)) return <RedIcon icon={ faExclamationCircle }/>;
        else if ((meta.touched && !meta.error) || (meta.dirty && !meta.error)) return <GreenIcon icon={ faCheckCircle }/>;
        else return;
      })()}
      </InputRight>
      {(() => {
        if ((meta.touched && meta.error) || (meta.dirty && meta.error)) {
          return (
            <ErrorWrapper>{ meta.error }</ErrorWrapper>
          )
        }
      })()}
    </Wrapper>
  );
};

export default EtherInput;