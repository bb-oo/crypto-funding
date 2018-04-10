DROP TABLE IF EXISTS notifications;

CREATE TABLE notifications (
  id           serial,
  sender_id    int,
  recipient_id int,
  campaign_id  int
  content      text,
  read         boolean,
  date_sent    timestamp
);