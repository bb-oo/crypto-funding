import { describe, it } from 'mocha';
import { expect } from '../utils/shared';

import session from '../../src/client/reducers/session';

describe('session', () => {
  
  describe('SESSION_STARTED', () => {
    
    it('returns an object with user info', () => {
      const user = { username: 'TestUser' };
      const oldState = { loggedIn: false };
      const action = {
        type: 'SESSION_STARTED', 
        payload: user
      };

      const newState = session(oldState, action);
      console.log(newState)
      expect(newState.username).to.equal('TestUser');
      expect(newState.loggedIn).to.equal(true);
    })
  })

  describe('SESSION_ENDED', () => {
    
    it('returns an object with loggedIn equal to false', () => {
      const oldState = { loggedIn: true, username: 'TestUser' };
      const action = { type: 'SESSION_ENDED' };
      
      const newState = session(oldState, action);
      expect(newState.loggedIn).to.equal(false);
    })
  })

  describe('default return', () => {
    
    it('returns the old state', () => {
      const oldState = { loggedIn: true, username: 'TestUser' };
      const action = { 
        type: 'INCORRECT_TYPE',
        payload: { username: 'Does not matter' }
      };

      const newState = session(oldState, action);
      expect(newState).to.equal(oldState);
    })
  })
})