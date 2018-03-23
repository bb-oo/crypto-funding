import { before, beforeEach, afterEach } from 'mocha';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { JSDOM } from 'jsdom';
import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { grey } from 'chalk';
import { MemoryRouter } from 'react-router-dom';

import initStore from './init-store';

chai.use(chaiEnzyme());

const copyProps = src => target => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

before(() => console.log(grey('\n Unit Tests\n')));

beforeEach(() => {
  const { window } = new JSDOM(`<!doctype html><html><body></body></html>`);
  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
  copyProps(window, global);
});

afterEach(() => {
  let window, document, navigator;
  Object.assign(global, { window, document, navigator });
});

const withStore = initialState => {
  const store = initStore({});

  return function WithStore(Component, ownProps) {
    return (
      <Provider store={ store }>
        <MemoryRouter>
          <Component { ...ownProps }/>
        </MemoryRouter>
      </Provider>
    )
  }
}

export * from './shared';
export { shallow, withStore, copyProps };