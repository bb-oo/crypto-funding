import axios from 'axios';
import history from '../utils/history';

import { isEmail, validateUsername, validatePassword } from './helpers';

export const manageSubmit = values => {
  return async (dispatch, getState) => {
    const { data } = await axios.post('/auth/user', values);

    return data;
  }
}

export const onSubmitSuccess = ({ username }) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/user/${username}`);

    dispatch({ type: 'SESSION_STARTED', payload: data[0] });
    history.push('/');
  }
}

export const validate = ({ username = '', email = '', password = '' }) => {
  const errors = {};

  errors.username = validateUsername(username);
  errors.email = isEmail(email) ? null : 'Invalid email.';
  errors.password = validatePassword(password);

  return errors;
}