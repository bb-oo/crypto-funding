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
  amount_raised     decimal,
  image_url         text,
  campaign_address  text
);