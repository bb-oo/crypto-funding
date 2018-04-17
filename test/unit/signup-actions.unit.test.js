import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect, stub, injectStore, rejected } from '../utils/unit';
import axios from 'axios';
//import moxios from 'moxios';

//import { app } from '../../src/server/index';
import { onSubmit, asyncValidateUsername } from '../../src/client/registration/actions';

describe('registration/actions', () => {

  let store;

  beforeEach(() => {
    store = injectStore()();
  })

  describe('asyncValidateUsername', () => {
    
    beforeEach(() => stub(axios, 'get'))

    afterEach(() => axios.get.restore())

    describe('when a username is not available', () => {

      it('rejects with an error', async () => {
        const unavailable = 'NicBonetto';
        axios.get.resolves({ data: ['NicBonetto'] });
        const err = await rejected(store.dispatch(asyncValidateUsername({ username: unavailable })));

        expect(err).to.include({ username: `Username ${unavailable} is already taken.` });
        expect(axios.get).to.have.been.calledWith(`/user/${unavailable}`);
      })
    })
  })
})