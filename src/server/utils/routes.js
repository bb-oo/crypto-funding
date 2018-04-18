import { auth } from './firebase';
import { postUser, getUsername, postCampaign, getCampaigns } from './database';

export const createUser = ({ username, email, password }) => {
  return auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      return postUser(username, email)
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
      return getUsername(username)
        .then(data => {
          if (data.length < 1) return 'Username not found.';
        })
    })
    .catch(err => err)
};

export const createCampaign = values => {
  return postCampaign(values)
    .then(data => data)
    .catch(err => err);
};

export const fetchCampaigns = search => {
  return getCampaigns(search)
    .then(data => data)
    .catch(err => err);
};