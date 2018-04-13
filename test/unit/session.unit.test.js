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
})