import React from 'react';
import axios from 'axios';

import history from '../utils/history';
import { isEmail, validateUsername, validatePassword } from './helpers';

export const asyncValidateUsername = ({ username }) => {
  return async (dispatch, getState) => {
    if (!username) return;
    const { data } = await axios.get(`/user/${username}`);
    if (data.length > 0) {
      throw { username: `Username ${username} is already taken.` };
    } 
  }
}

export const validate = ({ username = '', password = '', email = '' }) => {
  const errors = {};

  errors.username = validateUsername(username);
  errors.email = isEmail(email) ? null : 'A valid email is required.';
  errors.password = validatePassword(password);

  return errors;
}

export const onSubmit = values => {
  return async (dispatch, getState) => {
    const response = await axios.post('/create/user', values);
    return response;
  }
}

export const onSubmitSuccess = () => {
  return (dispatch, getState) => {
    history.push('/signin')
  }
}