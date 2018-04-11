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
      const session = { loggedIn: true, username: username } 
      const Wrapper = provide(NavBar, { session });
      wrapper = mount(Wrapper);
    });

    it('Displays navigation links and username', () => {
      const link = wrapper.find(NavLink).at(1);
      expect(link).to.have.text('Start a Campaign');
    });
  });
  describe('When the user does not have an active session', () => {
    let wrapper;

    beforeEach(() => {
      const provide = withStore({});
      const session = { loggedIn: false }
      const Wrapper = provide(NavBar, { session });
      wrapper = mount(Wrapper);
    });

    it('Displays a login link', () => {
      const link = wrapper.find(NavLink).at(1);
      expect(link).to.have.text('Sign In');
    });
  });
});