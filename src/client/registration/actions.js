import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const asyncValidateUsername = ({ username }) => {
  return async (dispatch, getState) => {
    console.log(username)
    if (!username) return;
    const { data } = await axios.get(`/validate/${username}`);
    console.log(data)
    if (data.length > 0) {
      throw { username: `Username ${username} is already taken.` };
    } 
  }
}

export const validate = values => {
  const errors = {};

  if (!values.username) errors.username = 'Required';
  if (!values.email) errors.email = 'Required';
  if (!values.password) errors.password = 'Required';

  return errors;
}

export const manageSubmit = values => {
  return async (dispatch, getState) => {
    console.log(values)
    const response = await axios.post('/create/user', values);

    return <Redirect to="/signin"/>;
  }
}