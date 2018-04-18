import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect, stub, injectStore } from '../utils/unit';
import axios from 'axios';

import { onSubmit, onSubmitSuccess } from '../../src/client/authentication/actions';

describe('authentication/actions', () => {
  
    let store;

    beforeEach(() => {
      store = injectStore()();
    })

    describe('onSubmit', () => {

      beforeEach(() => stub(axios, 'post'))

      afterEach(() => axios.post.restore())

      it('posts a set of user credentials', async () => {
        const creds = { username: 'testUser', email: 'test@testing.com', password: 'testing123' };
        axios.post.resolves({ data: '' });
        const res = await store.dispatch(onSubmit(creds));

        expect(res).to.deep.equal(creds);
      })
    })
})