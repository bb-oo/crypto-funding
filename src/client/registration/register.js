import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { asyncValidateUsername, manageSubmit, validate } from './actions';
import { Input, Button } from '../components/index';

const asyncValidate = _.debounce(asyncValidateUsername, 200);



const Form = ({ manageSubmit, handleSubmit, submitting, asyncValidate }) => {
  return (
    <form name="register" onSubmit={ handleSubmit(values => manageSubmit(values)) }>
      <Field
        autoFocus
        name='username'
        type='text'
        placeholder='Username'
        onChange={ event => asyncValidate(event.target.value) }
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
  manageSubmit
}, dispatch);

const Register = reduxForm({
  form: 'register',
  validate
})(Form);

export default connect(null, mapDispatchToProps)(Register);