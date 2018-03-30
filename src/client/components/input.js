import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/fontawesome-free-solid';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  min-height: 70px;
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #c1c5cc;
  background-color: white;

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
    width: 200px;
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

const GreenIcon = styled(FontAwesomeIcon)`
  color: #00FA9A;
`;

const RedIcon = styled(FontAwesomeIcon)`
  color: #FE532E;
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

const ErrorWrapper = styled.div`
  position: absolute;
  display: inline-block;
  display: flex;
  background-color: #f16767;
  min-height: 70px;
  width: 130px;
  font-family: inherit;
  font-weight: 400;
  letter-spacing: 1px;
  color: white;
  align-items: center;
  justify-content: center;
  margin-left: 250px;
  padding: 5px;
`;

const Input = ({ input, meta, ...props }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <InputLeft>
          <input { ...input } { ...{ ...props } } />
        </InputLeft>
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
    </React.Fragment>
  );
}

export default Input;