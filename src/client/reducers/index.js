import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import session from './session';

export default combineReducers({ 
  session: session,
  form: formReducer
});