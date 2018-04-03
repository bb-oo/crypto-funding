import axios from 'axios';
import history from '../utils/history';

export const onSubmit = values => {
  return async (dispatch, getState) => {
    const data = axios.post('/create/campaign', values);
    return data;
  };
};

export const onSubmitSuccess = values => {
  return (dispatch, getState) => {
    history.push('/')
  };
};

export const validate = values => {
  return;
};