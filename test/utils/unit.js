import { before, beforeEach, afterEach } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { grey } from 'chalk';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

chai.use(chaiEnzyme());

const injectStore = () => configureStore([ thunk ]);

const rejected = promise => promise.catch(err => err);

before(() => console.log(grey('\n Unit Tests\n')));

const INIT = '@@redux/INIT';

export * from './shared';
export { shallow, injectStore, INIT, rejected };