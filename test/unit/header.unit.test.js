import { describe, it, beforeEach } from 'mocha';
import React from 'react';

import { expect, shallow } from '../utils/unit';
import Header from '../../src/client/components/header';

describe('Header', () => {
  describe('When it recieves correct props', () => {
    const text = "Good props.";

    it('Returns the appropriate element', () => {
      const wrapper = shallow(<Header size={ 1 } text={ text }/>);
      expect(wrapper.find('H1').children()).to.have.text(text);
    });
  });

  describe('When it recieves incorrect props', () => {
  
    it('Throws an error', () => {
      const size = 100;
      const text = 'Bad props.'
      expect(() => Header({ size, text })).to.throw(`Incorrect prop value for size = ${size}.`);
    });
  });
});