import axios from 'axios';
import history from '../utils/history';

import { isZip, validateEtherAmount, validateText } from './helpers';

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

export const validate = ({ goal = null, title = '', target = '', zip = null, category = '' }) => {
  const errors = {};

  errors.goal = validateEtherAmount(goal);
  errors.title = validateText(title);
  errors.target = validateText(target);
  errors.zip = isZip(zip) ? null : 'Invalid ZIP code.';
  errors.category = validateText(category);

  return errors;
};
