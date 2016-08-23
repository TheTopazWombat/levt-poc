insert into customer_account_requests (
  first_name,
  last_name,
  address,
  invoice,
  phone_num1,
  phone_num2,
  model_num,
  serial_num
)
values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8
)
