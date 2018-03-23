import { describe, it, beforeEach } from 'mocha';
import React from 'react';

import { expect, shallow, withStore } from '../utils/unit';
import { Header } from '../../src/client/components/index';

describe('Header', () => {
  describe('When it recieves correct props', () => {
    let wrapper;
    const text = "Good props.";

    beforeEach(() => {
      const provide = withStore({});
      const Wrapper = provide(Header, { text: text, size: 1 });
      wrapper = shallow(Wrapper);
    });

    it('Returns the appropriate element', () => {
      const header = wrapper.find(Header).at(1);
      expect(header).to.have.text(text);
    });
  });

  describe('When it recieves incorrect props', () => {
  
    it('Throws an error', () => {
      expect(<Header size={ 100 } text="Bad props."/>).to.throw();
    });
  });
});