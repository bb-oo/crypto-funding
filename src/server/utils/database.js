import 'dotenv/config';
import Knex from 'knex';

const knex = Knex({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
});

export const postUser = (...data) => {
  const query = knex
    .insert({
      username: data.username,
      email: data.email
    })
    .into('users');
  
  return query;
}

export const validateUsername = username => {
  const query = knex  
    .table('users')
    .where({
      username: username
    });

  return query;
}