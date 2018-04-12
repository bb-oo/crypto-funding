import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';

import { asyncValidateUsername, onSubmit, validate, onSubmitSuccess } from './actions';
import { Input, Button } from '../components/index';

const asyncValidate = _.debounce(asyncValidateUsername, 200);

const Form = ({ handleSubmit, submitting }) => {
  return (
    <form name="register" noValidate onSubmit={ handleSubmit }>
      <Field
        autoFocus
        name='username'
        type='text'
        placeholder='Username'
        onChange={ asyncValidate }
        component={ Input }
      />
      <Field
        name='email'
        type='email'
        placeholder='Email'
        component={ Input }
      />
      <Field
        name='password'
        type='password'
        placeholder='Password'
        component={ Input }
      />
      <Button type='submit' disabled={ submitting }>Register</Button>
    </form>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  asyncValidate,
  onSubmit,
  onSubmitSuccess
}, dispatch);

const Register = reduxForm({
  form: 'register',
  validate
})(Form);

export default connect(null, mapDispatchToProps)(Register);