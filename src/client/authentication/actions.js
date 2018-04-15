import axios from 'axios';
import history from '../utils/history';

import { isEmail, validateUsername, validatePassword } from './helpers';

export const onSubmit = values => {
  return async (dispatch, getState) => {
    const { data } = await axios.post('/auth/user', values);
    
    if (data.code === 'auth/wrong-password') {
      throw { password: 'Incorrect password.' };
    } else if (data.code === 'auth/user-not-found') {
      throw { email: 'Incorrect email.' };
    } else if (!data) {
      throw { username: 'Incorrect username.' };
    } else {
      return values;
    }
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