import axios from 'axios';
import history from '../utils/history';

export const manageSubmit = values => {
  return async (dispatch, getState) => {
    const { data } = await axios.post('/auth/user', values);

    return data;
  }
}

export const onSubmitSuccess = ({ username }) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`/user/${username}`);

    dispatch({ type: 'SESSION_STARTED', payload: data });
    history.push('/');
  }
}

export const validate = values => {
  const errors = {};

  if (!values.username) errors.username = 'Required';
  if (!values.email) errors.email = 'Required';
  if (!values.password) errors.password = 'Required';

  return errors;
}