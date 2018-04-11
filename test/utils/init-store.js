import{ createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../../src/client/reducers/index';

//const { devToolsExtension = () => _ => _ } = global;
const initStore = state => (
  createStore(reducer, state, applyMiddleware(thunk))
);

export default initStore;