import { before, beforeEach, afterEach } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { grey } from 'chalk';

chai.use(chaiEnzyme());

before(() => console.log(grey('\n Unit Tests\n')));

export * from './shared';
export { shallow };