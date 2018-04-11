import { auth } from './firebase';
import { postUser, getUsername, postCampaign, getCampaigns } from './database';

export const createUser = ({ username, email, password }) => {
  return auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      postUser(username, email)
        .then(data => data)
        .catch(err => err)
    })
    .catch(err => err);
};

export const validate = username => {
  return getUsername(username);
};

export const signInUser = ({ username, email, password }) => {
  return auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      getUsername(username)
        .then(data => data)
        .catch(err => err)
    })
    .catch(err => err)
};

export const createCampaign = values => {
  return postCampaign(values)
    .then(data => data)
    .catch(err => err);
};

export const getCampaigns = search => {
  return getCampaigns(search)
    .then(data => data)
    .catch(err => err);
};