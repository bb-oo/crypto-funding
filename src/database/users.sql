DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id              serial,
  username        text,
  first_name      text,
  last_name       text,
  email           text,
  phone           text,
  default_address text
);