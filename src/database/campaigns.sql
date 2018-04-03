DROP TABLE IF EXISTS campaigns;

CREATE TABLE campaigns (
  id                serial,
  title             text,
  organizer         text,
  organizer_id      int,
  description       text,
  target            text,
  zip               int,
  category          text,
  donations         int,
  goal              decimal,
  target_address    text,
  organizer_address text,
  amount_raised     decimal
);