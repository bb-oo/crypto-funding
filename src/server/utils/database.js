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
};

export const getUsername = username => {
  const query = knex  
    .table('users')
    .where({
      username: username
    })
    .select('username');

  return query;
};

export const postCampaign = values => {
  const query = knex
    .insert({
      title: values.title,
      goal: values.goal,
      target: values.target,
      zip: values.zip,
      category: values.category,
      campaign_address: values.campaignAddress
    })
    .into('campaigns');

  return query;
};

export const getCampaigns = search => {
  const query = knex
    .table('campaigns')
    .whereRaw("title LIKE ?", [search])
    .select('*');
  
  return query;
};