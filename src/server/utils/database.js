import 'dotenv/config';
import Knex from 'knex';

const knex = Knex({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
});

export const postUser = (username, email) => {
  const query = knex
    .insert({
      username: username,
      email: email
    })
    .into('users');
  
  return query;
}

export const getUsername = username => {
  const query = knex  
    .table('users')
    .where({
      username: username
    })
    .select('username');

  return query;
}