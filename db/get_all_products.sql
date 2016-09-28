select * from products;


insert into messages (
  message_text,
  message_time,
  is_group_message,
  is_edited,
  author_id,
  channel_recipient
)
values (
  'God damn I wish this would work',
  '2016-09-09T16:56:30-06:00',
  'true',
  'false',
  6,
  1
)
