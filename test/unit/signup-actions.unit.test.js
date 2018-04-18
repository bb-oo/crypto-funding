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

    describe('when a username is available', () => {
      
      it('resolves', async () => {
        const available = 'foo';
        axios.get.resolves({ data: [] });
        const res = await store.dispatch(asyncValidateUsername({ username: available }));

        expect(res).to.equal(null);
        expect(axios.get).to.have.been.calledWith(`/user/${available}`);
      })
    })

    describe('when no username is passed', () => {

      it('resolves without sending a request', async () => {
        const input = '';
        const res = await store.dispatch(asyncValidateUsername({ username: input }));

        expect(res).to.equal(undefined);
      })
    })
  })

  describe('onSubmit', () => {

    beforeEach(() => stub(axios, 'post'))

    afterEach(() => axios.post.restore())

    it('posts a new user', async () => {
      axios.post.resolves({ data: '' });
      const res = await store.dispatch(onSubmit({ username: 'foo', email: 'test@user.com', password: 'testing123' }));
      
      expect(res).to.be.an('object');
      expect(axios.post).to.have.been.calledWith('/create/user', 
        { username: 'foo', email: 'test@user.com', password: 'testing123' }
      )
    })
  })
})