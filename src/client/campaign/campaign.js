import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';

import { Input, Button, EtherInput } from '../components/index';
import { onSubmit, onSubmitSuccess, validate } from './actions';

const Form = ({ submitting, handleSubmit }) => {
  return (
    <form name="campaign" onSubmit={ handleSubmit }>
      <Field
        autoFocus
        name="goal"
        type="number"
        placeholder="Enter Your Goal"
        component={ EtherInput }
      />
      <Field
        name="title"
        type="text"
        placeholder="Campaign Title"
        component={ Input }
      />
      <Field
        name="target"
        type="text"
        placeholder="Who is the campaign for?"
        component={ Input }
      />
      <Field
        name="zip"
        type="number"
        placeholder="Your ZIP code"
        component={ Input }
      />
      <Field
        name="category"
        type="text"
        placeholder="Category"
        component={ Input }
      />
      <Button type="submit" disabled={ submitting }>Next</Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit,
  onSubmitSuccess
}, dispatch);

const CampaignForm = reduxForm({
  form: 'campaign',
  validate
});

export default connect(null, mapDispatchToProps)(CampaignForm);