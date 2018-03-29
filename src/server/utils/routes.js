import { auth, firebaseDB } from './firebase';
import { postUser, validateUsername } from './database';

export const  createUser = async ({ username, email, password }) => {
  const firebaseRes = await firebase.auth.createUserWithEmailAndPassword(email, password);
  const postgresRes = await postUser({ username, email });
  return { firebaseRes, postgresRes };
};

export const validate = username => {
  return validateUsername(username);
}