import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';

import { Input, Button } from '../components/index';
import { manageSubmit, onSubmitSuccess, validate } from './actions';

const Form = ({ submitting, handleSubmit, manageSubmit, onSubmitSuccess }) => {
  return (
    <form name='signin' onSubmit={ handleSubmit(values => {
      manageSubmit(values) 
      onSubmitSuccess(values)
    })}>
      <Field
        autoFocus
        name='username'
        type='text'
        placeholder='Username'
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
      <Button type='submit' disabled={ submitting }>Login</Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  manageSubmit,
  onSubmitSuccess
}, dispatch);

const SignIn = reduxForm({
  form: 'signin',
  validate
})(Form);

export default connect(null, mapDispatchToProps)(SignIn);