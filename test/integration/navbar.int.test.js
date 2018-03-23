import { describe, beforeEach, it } from 'mocha';
import React from 'react';

import { withStore, mount, expect } from '../utils/integration';
import { NavBar } from '../../src/client/components/nav-bar';
import NavLink from '../../src/client/components/nav-link';

describe('NavBar', () => {
  describe('When the user is in an active session', () => {
    let wrapper;
    const username = "Test User";

    beforeEach(() => {
      const provide = withStore({});
      const Wrapper = provide(NavBar, { username: username });
      wrapper = mount(Wrapper);
    });

    it('Displays navigation links and username', () => {
      const link = wrapper.find(NavLink).at(1);
      expect(link).to.have.text(username);
    });
  });
  describe('When the user does not have an active session', () => {
    let wrapper;

    beforeEach(() => {
      const provide = withStore({});
      const Wrapper = provide(NavBar, { username: false });
      wrapper = mount(Wrapper);
    });

    it('Displays a login link', () => {
      const link = wrapper.find(NavLink).at(1);
      expect(link).to.have.text('Sign Up');
    });
  });
});